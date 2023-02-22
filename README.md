# Milestone Project 3 Recipe App
This app allows you to write down and create recipes.

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

Node, Express, React, MongoDB, (ORM / ODM), React-Bootstrap

## Other Information
### Routes

| Method | Path                      | Purpose                   | Redirect Path*        |
| ------ | ------------------------- | ------------------------- | --------------------- |
| GET    | `/`                       | Welcome Page              | `/signup` or `/login` |
| POST   | `/signup`                 | User Signup Page          | `/recipes`            |
| GET    | `/login`                  | User Login Page           | `/recipes`            |
| GET    | `/recipes/`               | Recipes Index Page        |                       |
| POST   | `/recipes/new`            | New Recipe Form           | `/recipes/:recipeId`  |
| GET    | `/recipes/:recipeId`      | View Recipe               |                       |
| PUT    | `/recipes/:recipeId/edit` | Edit Recipe Form          | `/recipes/:recipeId`  |
| DELETE | `/recipes/:recipeId`      | Delete Recipe             | `/recipes`            |
| GET    | `/recipes/:categoryId`    | Filter by Recipe Category |                       |
| GET    | `*`                       | 404 Page                  |                       |

### Recipes

| Data          | Type               | Info                                                   |
| ------------- | ------------------ | ------------------------------------------------------ |
| `_id`         | Object ID          | Recipe ID                                              |
| `title`       | String             | Recipe Title                                           |
| `category`    | String or Booleans | Recipe Category (breakfast, lunch, dinner, or dessert) |
| `ingredients` | String             | Recipe Ingredients                                     |
| `directions`  | String             | Recipe Directions                                      |
| `pic`         | String             | Recipe Image                                           |
| `favorite`    | Boolean            | If Recipe is in Favorites                              |
| `source`      | String             | Recipe Source                                          |
| `description` | String             | Recipe Description                                     |

### Users

| Data   | Type      | Info     |
| ------ | --------- | -------- |
| `uuid` | Object ID | User ID  |
|        |           | Password |
|        | String    | Email    |
|        | String    | Name     |

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