using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace server.Interfaces
{
    public interface IRepository
    {
        Task<List<T>> FindAll<T>() where T : class;
        Task<T> FindById<T>(int id) where T : class;
        Task CreateAsync<T>(T entity) where T : class;
        Task UpdateAsync<T>(T entity) where T : class;
        Task DeleteAsync<T>(T entity) where T : class;


    }
}