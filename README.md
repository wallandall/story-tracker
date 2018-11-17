# Story-Tracker

This application allows users to create and share stories as well as authenticate using Passport and Google OAuth Strategy.

# Demo

Here is a working live demo: https://webe-story-tracker.herokuapp.com/


# Installing
## Dependencies
```
  express
  mongoose
  passport
  passport-google-oauth20
  express-session
  cookie-parser
  express-handlebars
  body-parser
  moment

```

To install all dependencies type the below command from the application directory

```
npm install

```
# Running the program

## Environment Variables
- PORT
  - Defines the Port the application runs on
- MLAB_USER
  - MLAB database user
- MLAB_PASSWORD
  - MLAB database MLAB_PASSWORD
- STORY_TRACKER_DB
  - The name of the database
- STORY_TRACKER_googleClientID
  - Google OAuth Client ID
- STORY_TRACKER_googleClientSecret
  - Google OAuth Client Secret Key
- NODE_ENV
  - The Node Environment eg: production, test or development



## To to run the program type the below command from the application directory

```
npm start

```
