using Kata.Business.Managers;
using Kata.Business.Models;
using Kata.Business.Repository;
using Kata.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Linq.Expressions;

namespace Kata.DataAccess.Managers
{
    public class CountryManager : BaseKataManager<CountryModel, Country>, ICountryManager
    {
        public CountryManager(IKataRepository repository)
            : base(repository)
        {
            Repository = repository;
        }

        public Task<IEnumerable<CountryModel>> GetListAsync(Expression<Func<Attractions, bool>> where)
        {
            throw new NotImplementedException();
        }

        public Task<CountryModel> GetSingleAsync(Expression<Func<Attractions, bool>> where)
        {
            throw new NotImplementedException();
        }

        public Attractions ToDataModel(CountryModel domainModel, Attractions dataModel = null)
        {
            throw new NotImplementedException();
        }

        public Attractions ToDataModelWithChildNodes(CountryModel domainModel, Attractions dataModel = null)
        {
            throw new NotImplementedException();
        }

        public CountryModel ToDomainModel(Attractions dataModel)
        {
            throw new NotImplementedException();
        }

        public CountryModel ToDomainModelWithChildNodes(Attractions dataModel)
        {
            throw new NotImplementedException();
        }
    }
}
