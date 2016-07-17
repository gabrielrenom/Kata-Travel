using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kata.Business.Models
{
    public class AttractionsModel: BaseModel
    {
        public string Name { get; set; }
        public int CityId { get; set; }
        public virtual CityModel City { get; set; }
    }
}
