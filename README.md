# VueASPNETCore2WebApiAuth
Sample project based on <a href="https://fullstackmark.com/post/16/user-authentication-with-vuejs-aspnet-core-2-and-facebook-login">the blog post</a> demonstrating jwt-based authentication with an Vue.js (v2.5.13) frontend and ASP.NET Core 2 WebApi. Includes both local user registration with .NET Core Identity membership and facebook login scenarios.

### Facebook flow
<img src="https://fullstackmark.com/img/posts/16/vue-spa-aspnet-core-web-api-authentication-with-facebook-login-flow.gif" />

### Email flow
<img src="https://fullstackmark.com/img/posts/16/vue-spa-aspnet-core-web-api-authentication-with-email-signup-flow.gif" />


## Development Environment
- Sql Server Express 2017 & Sql Server Management Studio 2017
- Visual Studio Code v1.20.1
- Node 8.9.4 & NPM 5.6.0
- .NET Core 2.0 sdk
- Vue CLI => npm install -g @vue/cli https://github.com/vuejs/vue-cli
- Vue 2.5.13

## Setup
To build and run the project:

### Build and run the backend ASP.NET Core Web API application:
1. Restore nuget packages with `backend\AuthWebApi>dotnet restore` in the `backend\AuthWebApi` directory.
2. Create the database with `backend\AuthWebApi>dotnet ef database update` in the `backend\AuthWebApi` directory.
3. Run the project with `backend\AuthWebApi>dotnet run` in the `backend\AuthWebApi` directory.

### Build and run the frontend Vue.js application:
1. Install npm packages with `frontend>npm install` in the `frontend` directory.
2. Start the application with the node development serve `frontend>npm run serve` in the `frontend` directory.

## Facebook App Setup
You're free to use the demo facebook app _Fullstack Cafe_ that the project is already configured with.  To setup and use your own application <a href="https://fullstackmark.com/post/16/user-authentication-with-vuejs-aspnet-core-2-and-facebook-login#creating-a-facebook-application">follow the steps detailed on the post</a>.
