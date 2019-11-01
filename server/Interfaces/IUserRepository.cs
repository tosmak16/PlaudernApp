using System.Linq;
using System.Threading.Tasks;
using server.Models;

namespace server.Interfaces
{
    public interface IUserRepository
    {
        IQueryable<User> GetUsers(long userId);
        Task<User> GetUser(int id);


    }
}