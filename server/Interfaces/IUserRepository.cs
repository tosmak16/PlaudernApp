using System.Linq;
using server.Models;

namespace server.Interfaces
{
    public interface IUserRepository
    {
        IQueryable<User> GetUsers(long userId);

    }
}