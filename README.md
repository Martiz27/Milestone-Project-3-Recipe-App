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

Node, Express, React, (SQL / Mongo), (ORM / ODM), Bootstrap, SASS

## Other Information
### Routes

| Method | Path                   | Purpose                   | Redirect Path*        |
| ------ | ---------------------- | ------------------------- | --------------------- |
| GET    | `/`                    | Welcome Page              | `/signup` or `/login` |
| POST   | `/signup`              | User Signup Page          | `/recipes`            |
| GET    | `/login`               | User Login Page           | `/recipes`            |
| GET    | `/recipes/`            | Recipes Index Page        |                       |
| GET    | `/recipes/:categoryId` | Filter by Recipe Category |                       |
| POST   | `/recipes/new`         | New Recipe Form           | `/recipes/:id`        |
| GET    | `/recipes/:id`         | View Recipe               |                       |
| PUT    | `/recipes/:id/edit`    | Edit Recipe Form          | `/recipes/:id`        |
| DELETE | `/recipes/:id`         | Delete Recipe             | `/recipes`            |
| GET    | `*`                    | 404 Page                  |                       |

### Recipes

| Data          | Type                   | Info                                                 |
| ------------- | ---------------------- | ---------------------------------------------------- |
| `id`          | Object ID              | Recipe ID                                            |
| `title`       | String                 | Recipe Title                                         |
| `category`    | String or Booleans     | Recipe Category (breakfast, lunch, dinner, or snack) |
| `ingredients` | String or String Array | Recipe Ingredients                                   |
| `directions`  | String or String Array | Recipe Directions                                    |
| `pic`         | String                 | Recipe Image                                         |
| `favorited`   | Boolean                | If Recipe is in Favorites                            |

### Users

| Data | Type      | Info     |
| ---- | --------- | -------- |
| `id` | Object ID | User ID  |
|      |           | Password |
|      | String    | Email    |
|      | String    | Name     | 

- - -
### Pitfalls
Notes about bugs and unfinished functionality

- - -
### Collaborators

[Joshua Lopez](https://github.com/Mediczilla)

[Martiz Ware](https://github.com/Martiz27)

[Jamaine Haywood](https://github.com/jhaywood86)

[Nikki Jaramillo](https://github.com/n-jaramillo)
