using Kata.Business.Managers;
using Kata.Business.Models;
using Kata.Business.Repository;
using Kata.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kata.DataAccess.Managers
{
    public class CityManager : BaseKataManager<CityModel, City>, ICityManager
    {
        public CityManager(IKataRepository repository)
            : base(repository)
        {
            Repository = repository;
        }

        public override async Task<bool> UpdateAsync(CityModel domainModel)
        {           
            var cityentity = await Repository.GetSingleAsync<City>(x => x.Id == domainModel.Id, 
                x=>x.Country,
                x=>x.Attractions);

            if (cityentity != null)
            {
                cityentity.Name = domainModel.Name;
                cityentity.IsVisited = domainModel.IsVisited;
                cityentity.Country.Name = domainModel.Country.Name;

                if (cityentity.Attractions != null)
                {
                    Repository.DeleteMany<Attractions>(cityentity.Attractions.ToArray());

                    cityentity.Attractions = domainModel.Attractions != null ? domainModel.Attractions.Select(x => new Attractions
                    {
                        Name = x.Name,
                        Created = x.Created,
                        Modified = x.Modified,
                        CreatedBy = x.CreatedBy,
                        ModifiedBy = x.ModifiedBy                        
                    }).ToList() : null;
                }
            }

            Repository.Update<City>(cityentity);
            var result = Repository.CommitAsync();

            return true;

        }

        public override City ToDataModel(CityModel domainModel, City dataModel = null)
        {
            if (dataModel == null)
                dataModel = new City();

            dataModel = new City
            {
                 Id = domainModel.Id,
                 Name = domainModel.Name,
                 Modified = DateTime.Now,
                 Created = DateTime.Now,
                 IsVisited = domainModel.IsVisited,
                 Country = domainModel.Country != null? new Country {
                        Id=domainModel.Country.Id,
                        Name = domainModel.Country.Name,
                        Created = DateTime.Now,
                        Modified = DateTime.Now,
                    }:null,
                Attractions = domainModel.Attractions != null ? domainModel.Attractions.Select(y => new Attractions
                {
                    Id = y.Id,
                    Name = y.Name,
                    Created = DateTime.Now,
                    Modified = DateTime.Now,

                }).ToList() : null
            };

            return dataModel;
        }

        public override CityModel ToDomainModel(City dataModel)
        {
            CityModel model = new CityModel
            {
                Id = dataModel.Id,
                Name = dataModel.Name,
                Modified = DateTime.Now,
                Created = DateTime.Now,
                IsVisited = dataModel.IsVisited,
                Country = dataModel.Country != null ? new CountryModel
                {
                    Id = dataModel.Country.Id,
                    Name = dataModel.Country.Name,
                    Created = DateTime.Now,
                    Modified = DateTime.Now,
                } : null,
                Attractions = dataModel.Attractions != null ? dataModel.Attractions.Select(y => new AttractionsModel {
                     Id= y.Id,
                     Name = y.Name,
                     Created = DateTime.Now,
                     Modified = DateTime.Now,

                }).ToList():null
            };

            return model;
        }

        public override async Task<IEnumerable<CityModel>> GetAllAsync()
        {
            var models =   Repository.AllIncluding<City>(x => x.Country, x=>x.Attractions).ToList();

            return models.Select(x => ToDomainModel(x));
        }
    }
}
