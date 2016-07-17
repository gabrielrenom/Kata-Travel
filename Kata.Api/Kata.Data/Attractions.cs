using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kata.Data
{
    public class Attractions: BaseEntity
    {
        public string Name { get; set; }
        public int CityId { get; set; }
        public virtual City City { get; set; }
    }
}
