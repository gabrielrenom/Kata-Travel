using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Kata.Api.Models
{
    public class CityModelView
    {
        [JsonProperty("id")]
        public int Id { get; set; }
        [JsonProperty("name")]
        public string City { get; set; }
        [JsonProperty("country")]
        public string Country { get; set; }
        [JsonProperty("isVisited")]
        public bool IsVisited { get; set; }
        [JsonProperty("attractions")]
        public IEnumerable<string> Attractions{get;set;}
    }
}