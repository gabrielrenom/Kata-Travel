using Kata.Business.Repository;
using Kata.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kata.DataAccess.Repository
{
    /// <summary>
    /// Implements the Generic Repository for the Asset Management Context
    /// </summary>
    public class KataRepository : GenericRepository<KataContext>, IKataRepository
    {

    }

}
