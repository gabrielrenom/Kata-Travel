using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kata.Data
{
    public class City : BaseEntity
    {
        public string Name { get; set; }
        public bool IsVisited { get; set; }
        public int CountryId { get; set; } 
        public virtual ICollection<Attractions> Attractions {get;set;}
        public virtual Country Country { get; set; }      
    }
}
