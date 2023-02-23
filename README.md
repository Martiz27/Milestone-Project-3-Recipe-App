# Milestone Project 3 Recipe App
This app allows you to store your recipes.

## Inspiration
Our inspiration for the app comes from our love of food and cooking.

## Features

### Recipes Index

#### Adding a new recipe

#### Editing an existing recipe

#### Adding a recipe to your favorites

#### Deleting a recipe

#### Applying a category filter

## Technologies
#### App Building
[Express](https://expressjs.com/) |
[Node](https://nodejs.org/en/) |
[React](https://reactjs.org/)

#### Authentication
[Bcrypt](https://www.npmjs.com/package/bcrypt) |
[JsonWebToken](https://www.npmjs.com/package/jsonwebtoken) |
[Universal-Cookie](https://www.npmjs.com/package/universal-cookie)

#### Database Management
[Mongoose](https://mongoosejs.com/) |
[MongoDB Atlas](https://www.mongodb.com/atlas/database)

#### Deployment
[Vercel](https://vercel.com/)

#### Styling
[React-Bootstrap](https://www.npmjs.com/package/react-bootstrap) |
[React-Icons](https://react-icons.github.io/react-icons) |
[React-Masonry-CSS](https://www.npmjs.com/package/react-masonry-css)

## Other Information
### Routes

| Method | Path                      | Purpose                   | Redirect Path*                    |
| ------ | ------------------------- | ------------------------- | --------------------------------- |
| GET    | `/`                       | Welcome Page              | `/users/signup` or `/users/login` |
| POST   | `/users/signup`           | User Signup Page          | `/recipes`                        |
| POST   | `/users/login`            | User Login Page           | `/recipes`                        |
| GET    | `/recipes/`               | Recipes Index Page        |                                   |
| POST   | `/recipes/new`            | New Recipe Form           | `/recipes/:recipeId`              |
| GET    | `/recipes/:recipeId`      | View Recipe               |                                   |
| PUT    | `/recipes/:recipeId/edit` | Edit Recipe Form          | `/recipes/:recipeId`              |
| DELETE | `/recipes/:recipeId`      | Delete Recipe             | `/recipes`                        |
| GET    | `/recipes/?categoryId`    | Filter by Recipe Category |                                   |
| GET    | `*`                       | 404 Page                  |                                   |

### Recipes

| Data          | Type             | Info                         |
| ------------- | ---------------- | ---------------------------- |
| `_id`         | Object ID        | Recipe ID                    |
| `author`      | Object ID        | Reference to User Collection |
| `title`       | String           | Recipe Title                 |
| `image`       | String           | Recipe Image                 |
| `category`    | Array of Strings | Recipe Tag                   |
| `favorite`    | Boolean          | If Recipe is in Favorites    |
| `ingredients` | String           | Recipe Ingredients           |
| `directions`  | String           | Recipe Directions            |
| `source`      | String           | Recipe Source                |
| `description` | String           | Recipe Description           |
| `createdAt`   | Timestamp        | Recipe Creation Date         |
| `updatedAt`   | Timestamp        | Recipe Update Date           |

### Users

| Data         | Type                  | Info                           |
| ------------ | --------------------- | ------------------------------ |
| `_id`        | Object ID             | User ID                        |
| `password`   | String stored as Hash | Password                       |
| `email`      | String                | Email                          |
| `firstName`  | String                | First Name                     |
| `lastName`   | String                | Last Name                      |
| `username`   | String                | Username                       |
| `recipeList` | Array of Object IDs   | Reference to Recipe Collection |
| `createdAt`  | Timestamp             | User Creation Date             |
| `updatedAt`  | Timestamp             | User Update Date               |

- - -
### Pitfalls
Notes about bugs and unfinished functionality

- - -
### Collaborators

[Joshua Lopez](https://github.com/Mediczilla)

[Martiz Ware](https://github.com/Martiz27)

[Jamaine Haywood](https://github.com/jhaywood86)

[Nikki Jaramillo](https://github.com/n-jaramillo)

[Jagbir Mangat](https://github.com/jbmangat)

- - - 

### Resources

BezKoder [Login and Registration Example](https://www.bezkoder.com/node-js-express-login-mongodb/#Controller_for_Registration_Login_Logout)

FreeCodeCamp  [How to Build an Authentication System](https://www.freecodecamp.org/news/how-to-build-a-fullstack-authentication-system-with-react-express-mongodb-heroku-and-netlify/#how-to-protect-the-routes)

Joshua Ellis [User Model Boilerplate](https://gist.github.com/jzellis/41038ac461433b32174a8c556f5aff76)

Thinkster [Creating the User Model](https://thinkster.io/tutorials/node-json-api/creating-the-user-model)
