using Kata.Business.Cities;
using Kata.Business.Cities.Interfaces;
using Kata.Business.Managers;
using Kata.Business.Repository;
using Kata.DataAccess.Managers;
using Kata.DataAccess.Repository;
using Ninject.Modules;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kata.Api.Test.Ninject
{
    public class NinjectAPIModule : NinjectModule
    {
        public override void Load()
        {
            Bind<IKataRepository>().To<KataRepository>();

            Bind<ICityManager>().To<CityManager>();
            
            Bind<ICityService>().To<CityService>();
                       
        }
    }
}
