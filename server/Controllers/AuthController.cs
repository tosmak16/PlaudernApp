using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using System.IdentityModel.Tokens.Jwt;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

using server.Dtos;
using server.Interfaces;
using server.Models;
using Microsoft.IdentityModel.Tokens;

namespace server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        private readonly IMapper _mapper;
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;

        public AuthController(IAuthRepository repo, IMapper mapper, IConfiguration config)
        {
            _config = config;
            _repo = repo;
            _mapper = mapper;
        }

        public string GenerateToken(User user)
        {
            var claims = new[] {
                        new Claim(ClaimTypes.Name, user.Id.ToString()),
                        new Claim(ClaimTypes.NameIdentifier, user.Username),
                    };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:SecretKey").Value));

            var cred = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                SigningCredentials = cred
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(token);
        }


        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegDto userForRegDto)
        {
            userForRegDto.Username = userForRegDto.Username.ToLower();

            if (await _repo.UserExists(userForRegDto.Username))
            {
                return BadRequest(new { message = "Username already exists" });
            }

            var userToBeRegisterd = _mapper.Map<User>(userForRegDto);

            var registeredUser = await _repo.Register(userToBeRegisterd, userForRegDto.Password);

            var token = this.GenerateToken(registeredUser);

            var userToReturn = _mapper.Map<UserDetailDto>(registeredUser);



            return Ok(new
            {
                token = token,
                user = userToReturn
            });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(UserForLogin userForLogin)
        {

            var loggedInUser = await _repo.Login(userForLogin.Username, userForLogin.Password);

            if (loggedInUser == null)
            {
                return Unauthorized();
            }

            var token = this.GenerateToken(loggedInUser);
            var userToReturn = _mapper.Map<UserDetailDto>(loggedInUser);



            return Ok(new
            {
                token = token,
                user = userToReturn
            });

        }
    }
}