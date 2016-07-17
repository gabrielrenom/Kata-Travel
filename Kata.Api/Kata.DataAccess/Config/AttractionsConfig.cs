using Kata.Data;
using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kata.DataAccess.Config
{
    public class AttractionsConfig : EntityTypeConfiguration<Attractions>
    {
        public AttractionsConfig()
        {
            //## Primary Key
            HasKey(t => t.Id);

            HasRequired(t => t.City)
           .WithMany(t => t.Attractions)
           .HasForeignKey(t => t.CityId)
      .WillCascadeOnDelete(false);

          //  this.HasOptional(s => s.BankAccount)
          //.WithMany(s => s.Payments)
          //.HasForeignKey(s => s.BankAccountId);


            //HasRequired(t => t.Slot)
            //    .WithMany(t => t.Availability)
            //    .HasForeignKey(t => t.SlotId)
            //    .WillCascadeOnDelete(false);

        }
    }
}
