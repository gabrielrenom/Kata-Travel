using Kata.Business.Models;
using Kata.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kata.Business.Managers
{       
    public interface IBaseKataManager<TD, TE> : IBaseManager<TD, TE>
        where TD : BaseModel
        where TE : BaseEntity
    {
        
    }
}
