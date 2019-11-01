using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using server.Dtos;
using server.Helpers;
using server.Interfaces;
using server.Models;

namespace server.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly IUserRepository _userService;
        private readonly IMapper _mapper;
        private readonly IRepository _repo;

        public UsersController(IUserRepository userService, IMapper mapper, IRepository repo)
        {
            _mapper = mapper;
            _userService = userService;
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetUsers([FromQuery] int page = 1, int pageSize = 10)
        {
            var identity = (ClaimsIdentity)User.Identity;
            var userId = long.Parse(identity.Name.ToString());
            var users = _userService.GetUsers(userId);
            var paginatedUsers = await PaginatedList<User>.PaginateAsync(users, page, pageSize);
            var userList = _mapper.Map<IEnumerable<UserListDto>>(paginatedUsers);

            return Ok(new
            {
                users = userList,
                pagination = new
                {
                    totalPages = paginatedUsers.TotalPages,
                    hasPreviousPage = paginatedUsers.HasPreviousPage,
                    hasNextPage = paginatedUsers.HasNextPage,
                    currentPage = paginatedUsers.PageIndex
                }
            });
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(int id)
        {
            var user = await _userService.GetUser(id);
            var userDetails = _mapper.Map<UserDetailDto>(user);

            return Ok(userDetails);
        }
    }


}