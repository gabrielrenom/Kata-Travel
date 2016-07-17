using System.Collections.Generic;

namespace Kata.Business.Models
{
    public class CityModel: BaseModel
    {
        public string Name { get; set; }
        public bool IsVisited { get; set; }
        public int CountryId { get; set; }
        public virtual ICollection<AttractionsModel> Attractions { get; set; }
        public virtual CountryModel Country { get; set; }
    }
}