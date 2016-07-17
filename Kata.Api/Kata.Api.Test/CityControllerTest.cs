using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Threading.Tasks;
using Kata.Api.Models;
using Kata.Api.Controllers;
using System.Collections.Generic;
using Ninject;
using Kata.Api.Test.Ninject;
using NSubstitute;
using System.Net.Http;
using System.Web.Http;
using Kata.Business.Models;

namespace Kata.Api.Test
{
    [TestClass]
    public class CityControllerTest
    {
        private CityController citycontroller;
        private KernelBase kernel;

        [TestInitialize]
        public void Setup()
        {
            
            kernel = new StandardKernel(new NinjectAPIModule());
            citycontroller = kernel.Get<CityController>();
        }

        [TestMethod]
        public async Task GivenACity_WhenAddIscalled_BesureItresturnsId()
        {
            //Arrange
            CityModel value = new CityModel();
            CityModelView city = new CityModelView
            {
                City = "London"
            };

            citycontroller.Request = Substitute.For<HttpRequestMessage>();  // using nSubstitute
            citycontroller.Configuration = Substitute.For<HttpConfiguration>();

            //Act
            var result = await citycontroller.Add(city);
            result.TryGetContentValue<CityModel>(out value);

            //Assert
            Assert.IsNotNull(result);
            Assert.IsTrue(value.Id > 0);
        }

        [TestMethod]
        public async Task GivenACityAndCountry_WhenAddIscalled_BesureItresturnsId()
        {
            //Arrange
            CityModel value = new CityModel();
            CityModelView city = new CityModelView
            {
                City = "London",
                Country = "UK"
            };

            citycontroller.Request = Substitute.For<HttpRequestMessage>();  // using nSubstitute
            citycontroller.Configuration = Substitute.For<HttpConfiguration>();

            //Act
            var result = await citycontroller.Add(city);
            result.TryGetContentValue<CityModel>(out value);

            //Assert
            Assert.IsNotNull(result);
            Assert.IsTrue(value.Id > 0);
        }

        [TestMethod]
        public async Task GivenACityCountryAndAttractions_WhenAddIscalled_BesureItresturnsId()
        {
            //Arrange
            CityModel value = new CityModel();
            CityModelView city = new CityModelView
            {
                City = "London",
                Country = "UK",
                Attractions = new List<string> {
                    "Pool","Darts","Arts", "Football Stadium"
                }
            };

            citycontroller.Request = Substitute.For<HttpRequestMessage>();  // using nSubstitute
            citycontroller.Configuration = Substitute.For<HttpConfiguration>();

            //Act
            var result = await citycontroller.Add(city);
            result.TryGetContentValue<CityModel>(out value);

            //Assert
            Assert.IsNotNull(result);
            Assert.IsTrue(value.Id > 0);
        }

        [TestMethod]
        public async Task GivenAModelWithCityCountryAndAttractions_WhenIsUpdated_BesureTheModelHasTheDAta()
        {
            //Arrange
            CityModel value = new CityModel();
            bool updatevalue;

            CityModelView city = new CityModelView
            {               
                City = "London",
                Country = "UK",
                IsVisited = false,
                Attractions = new List<string> {
                    "Pool","Darts","Arts", "Football Stadium"
                }
            };

            citycontroller.Request = Substitute.For<HttpRequestMessage>();  // using nSubstitute
            citycontroller.Configuration = Substitute.For<HttpConfiguration>();

            var newcity = await citycontroller.Add(city);
            newcity.TryGetContentValue<CityModel>(out value);            

            //Act
            var result = await citycontroller.Update(new CityModelView {
                 IsVisited = !city.IsVisited,
                 Id = value.Id,
                 City = value.Name,
                 Country = value.Country.Name
            });
            result.TryGetContentValue<bool>(out updatevalue);

            //Assert
            Assert.IsNotNull(result);
            Assert.IsTrue(value.Id > 0);
            Assert.IsTrue(updatevalue);
        }


        [TestMethod]
        public async Task _WhenGetIscalled_BesureItReturnsAllTheCities()
        {
            //Arrange
            IEnumerable<CityModelView> value;
            
            citycontroller.Request = Substitute.For<HttpRequestMessage>();  // using nSubstitute
            citycontroller.Configuration = Substitute.For<HttpConfiguration>();

            //Act
            var result = await citycontroller.GetAll();
            result.TryGetContentValue<IEnumerable<CityModelView>>(out value);

            //Assert
            Assert.IsNotNull(value);           
        }
    }
}
