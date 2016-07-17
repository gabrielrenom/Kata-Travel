using Kata.Data;
using Kata.DataAccess.Config;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kata.DataAccess
{
    public class KataContext : DbContext
    {
        public KataContext() : base("Kata")
        {

        }

        static KataContext()
        {
            Database.SetInitializer<KataContext>(new KataInitialiser());
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Configurations.Add(new AttractionsConfig());
            modelBuilder.Configurations.Add(new CitiesConfig());
            modelBuilder.Configurations.Add(new CountriesConfig());            
        }

        public DbSet<Attractions> Attractions { get; set; }
        public DbSet<City> Cities { get; set; }
        public DbSet<Country> Countries { get; set; }      

    }
}
