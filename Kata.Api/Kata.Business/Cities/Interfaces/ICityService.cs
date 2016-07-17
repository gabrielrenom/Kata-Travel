using Kata.Business.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kata.Business.Cities.Interfaces
{
    public interface ICityService
    {
        Task<CityModel> AddAsync(CityModel model);
        Task<bool> UpdateAsync(CityModel model);   
        Task<IEnumerable<CityModel>> GetAllAsync();
        Task<bool> DeleteAsync(int id);
    }
}
