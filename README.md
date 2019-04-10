# Grapes

## Description

This app is is going to be used to find wine pairings with different kinds of food. The user will be able to search for wine and find a matching food or search for a specific kind of food and match with a wine. Also the app will provide information about the most well-known grape types in order to guide the user into this fascinating world.

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **Signup:** As an anon I can sign up in the platform so that I can start saving favorite restaurants
-  **Login:** As a user I can login to the platform so that I can see my favorite restaurants
-  **Logout:** As a user I can logout from the platform so no one else can use it
-  **List Wines** As a user I can get a list of random recommended wines
-  **List Recipes** As a user I can get a list of random recommended recipes
-  **See wine details** As a user I want to check wine details from the wine chosen
-  **See recipe details** As a user I want to check recipe details from the recipe chosen
-  **See user profile** As a user I can see my user profile

## Backlog

User profile:
- see my profile
- upload my profile picture
- see other users profile
- list of favorite wines created by the user
- list of favorite recipes created by the user
- list of wine pairings created by the user
- follow/unfollow other users

Wines:
- search wines online and buy them (Glovo?)
- geolocate wine cellar in a map
- add new wines in a personal database

Recipes:
- search recipes online and download them
- calculate how much time to do a recipe
- add new recipes in a personal database

- ...
  
# Client

## Pages

| url | public | Functionality |
|-----|-------|---------------|
| `/` | true | landing page |
| `/signup` | true | Signup user |
| `/login` | true | login user |
| `/profile` | false | profile of user |
| `/wines` | true | show wine list |
| `/wines/wineId` | true | show wine details|
| `/recipes` | true | show recipe list|
| `/recipes/recipeId` | true | whoe recipe details|

## Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  - auth.me()
  - auth.getUser() // synchronous

# Server

## Models

User model

```
username - String // required
email - String // required & unique
password - String // required
favorites - [ObjectID<Wine>]
```

Wine model

```
owner - ObjectID<User> // required
name - String // required
cellar - String
grape - String
year - Number
```

## API Endpoints (backend routes)

## API routes:

### auth
|Method|Route|Functionality|
|---|---|---|
|GET|api/auth/me|Check session status|
|POST|api/auth/signup|Log in user to app and set user to session (Body: username, password)|
|POST|api/auth/login|Register user to app and set user to session (Body: username, password)|
|POST|api/auth/logout|Log out user from app and remove session|
  
### project
|Method|Route|Functionality|
|---|---|---|
|GET|api/wines|Shows wine list|
|GET|api/wines/:id|Shows wine details|
|GET|api/recipes|Shows recipe list|
|GET|api/recipes/:id|Shows recipe detail|

## Links

### Trello/Kanban

[Link to your trello board](https://trello.com/b/9Tk4blj9/ironhack-grapes)

### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/sandaun/grapes-frontend)

[Server repository Link](https://github.com/sandaun/grapes-backend)

[Deploy Link Backend](http://heroku.com)

[Deploy Link Frontend]()

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)
