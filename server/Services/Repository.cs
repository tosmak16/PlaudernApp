using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using server.Data;
using server.Interfaces;

namespace server.Services
{
    public class Repository : IRepository
    {
        protected DataContext _dbContext;

        public Repository(DataContext context)
        {
            _dbContext = context;
        }

        public async Task CreateAsync<T>(T entity) where T : class
        {
            _dbContext.Set<T>().Add(entity);
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteAsync<T>(T entity) where T : class
        {
            _dbContext.Set<T>().Remove(entity);

            await _dbContext.SaveChangesAsync();
        }

        public async Task<List<T>> FindAll<T>() where T : class
        {
            return await _dbContext.Set<T>().ToListAsync();

        }

        public async Task<T> FindById<T>(long id) where T : class
        {
            return await _dbContext.Set<T>().FindAsync(id);

        }

        public async Task UpdateAsync<T>(T entity) where T : class
        {
            _dbContext.Set<T>().Update(entity);

            await _dbContext.SaveChangesAsync();
        }




    }

}