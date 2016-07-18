Kata Travel

Kata-Travel is a small but extensible application has been built with a service architecture. The Front-End is based on Angular.Js 1.5 with typescript and the back-end it is .NET web api. The database engine used is SQL Server and for this exercise Entity Frameworks has been the backbone of the data.

The application itself is distributed in 3 Layers, presentations, business and data. Presentation contains the API and the WEB. The Api has been published to Azure and provide all the CRUD operations for the cities. (For more info: https://katawebapi.azurewebsites.net/swagger). The web api uses Ninject for dependency injection.
The application (web) is based in Angular.JS 1.5 build with typescript, Gulp, NPM, Bower, BrowserSync (independent server), TSLint etc. The client side can be migrated to any platform.

Entity framework has been used for the data access layer. EF is working against Sql Server. The database has been published in Azure as well. (To access: "Server=tcp:sbo1xjolut.database.windows.net,1433;Database=KataDev;User ID=KataDev@sbo1xjolut;Password=Manchester2016#;Trusted_Connection=False;Encrypt=True;Connection Timeout=30;")
The test project uses Dependency Injection with a Ninject module and NSubstitute to mock the api calls.

