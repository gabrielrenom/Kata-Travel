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
    public class AttractionssManager : BaseKataManager<AttractionsModel, Attractions>, IAttractionsManager
    {
        public AttractionssManager(IKataRepository repository)
            : base(repository)
        {
            Repository = repository;
        }
    }
}
