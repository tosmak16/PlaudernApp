using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Interfaces;
using server.Models;

namespace server.Services
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _dbContext;
        public UserRepository(DataContext dbContext)
        {
            _dbContext = dbContext;
        }
        public IQueryable<User> GetUsers(long userId)
        {
            return _dbContext.Users
            .Include(p => p.Photos)
            .Where(u => u.Id != userId).AsNoTracking();
        }
        public async Task<User> GetUser(int id)
        {
            var user = await _dbContext.Users.Include(p => p.Photos).FirstOrDefaultAsync(u => u.Id == id);

            return user;
        }
    }
}