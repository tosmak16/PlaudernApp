using System.Linq;
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
            .Where(u => u.Id != userId).AsNoTracking();
        }
    }
}