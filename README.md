# Github User Repositories

This project is a simple ReactJS application that uses
the Github API to display and search users and their repositories.\
The application consists of 2 views:
- the Github users' view, where a user finds Github users through
  a Search Text input.
- the Github user repositories, accessed when a user selects a Github user on the users view.\
  This view displays the user's profile as well as his repositories,
  with the possibility to filter repositories through a Search Text input

## Run the application

In order to run the project, you need to execute the following:

- create a Personal Access Token on Github. 
  See [Create a personal access token](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token)
- create a file named `.env` in the project's root directory and add the following line to the file: \
   `REACT_APP_GITHUB_API_TOKEN = <your Github personal access token>`
- run `npm install` to install all the project's dependencies
- run `npm run build` to execute a production build
- run `npm start` to run the application
- open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Feedback
This application is very simple yet very interesting, as it involves most of the basics in ReactJS, \
such as routing, component structuring, state management, input handling, http requests and more.\
I really enjoyed working on it.

## Improvements
A few improvements can be made, like:
- migrating from REST to GraphQL, in order to fetch the model based on our needs and not everything provided by the REST endpoint.
- Adding lazy loading to the Users' view. Currently, the search feature in the users' view fetches the
first 30 Github users, and the user would require adding to his search for more specific results.
  When scrolling to the end, more results should be automatically fetched.
- Adding a backend to the app for more security,
  since currently the Github Personal Access token is exposed on the client side.\
  A better approach would be to create an endpoint and use the access token on the server side.
