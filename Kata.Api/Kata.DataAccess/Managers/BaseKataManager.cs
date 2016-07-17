
using Kata.Business.Managers;
using Kata.Business.Models;
using Kata.Business.Repository;
using Kata.Data;
using Kata.DataAccess.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kata.DataAccess.Managers
{
    
    public abstract class BaseKataManager<TD, TE> : BaseManager<TD, TE>, IBaseKataManager<TD, TE>
        where TD : BaseModel, new()
        where TE : BaseEntity, new()
    {
        protected BaseKataManager(IKataRepository repository)
            : base(repository)
        {
        }

        /// <summary>
        /// Exposes the underlying repository and context.
        /// </summary>
        public KataRepository ACPRepository { get { return Repository as KataRepository; } }


    }
}
