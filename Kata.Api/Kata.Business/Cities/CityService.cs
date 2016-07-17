using Kata.Business.Cities.Interfaces;
using Kata.Business.Managers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Kata.Business.Models;

namespace Kata.Business.Cities
{
    public class CityService : ICityService
    {
        private readonly ICityManager _cityManager;

        public CityService(ICityManager cityManager)
        {
            _cityManager = cityManager;
        }

        public async Task<CityModel> AddAsync(CityModel model)
        {
            CityModel added = await _cityManager.AddAsync(model);

            return added;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var result = await _cityManager.DeleteByIdAsync(id);

            return result;
        }

        public async Task<IEnumerable<CityModel>> GetAllAsync()
        {
            var cities = await _cityManager.GetAllAsync();

            return cities;
        }

            
        public async Task<bool> UpdateAsync(CityModel model)
        {
            return await _cityManager.UpdateAsync(model);
        }    
    }
}
