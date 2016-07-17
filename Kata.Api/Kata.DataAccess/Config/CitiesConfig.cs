using Kata.Data;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kata.DataAccess.Config
{
    public class CitiesConfig : EntityTypeConfiguration<City>
    {
        public CitiesConfig()
        {
            //## Primary Key
            HasKey(t => t.Id);

            //HasRequired(t => t.Slot)
            //    .WithMany(t => t.Availability)
            //    .HasForeignKey(t => t.SlotId)
            //    .WillCascadeOnDelete(false);

        }
    }
}
