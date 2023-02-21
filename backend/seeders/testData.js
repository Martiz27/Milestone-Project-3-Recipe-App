const db = require('../models')
const { Recipe } = db
Recipe.create([
    {
        "title": "Best AI Generated Buttermilk Pancake Recipe",
        "breakfast": true,
        "lunch": false,
        "dinner": false,
        "dessert": false,
        "favorite": true,
        "ingredients": "2 cups all-purpose flour\n2 tablespoons sugar\n1 teaspoon baking powder\n1/2 teaspoon baking soda\n1/2 teaspoon salt\n2 cups buttermilk\n2 large eggs\n1/4 cup unsalted butter, melted\n1 teaspoon vanilla extract\nButter or oil, for cooking",
        "directions": "In a large mixing bowl, whisk together the flour, sugar, baking powder, baking soda, and salt.\nIn a separate mixing bowl, whisk together the buttermilk, eggs, melted butter, and vanilla extract.\nPour the wet ingredients into the dry ingredients and stir until just combined. Do not overmix.\nHeat a non-stick skillet or griddle over medium heat. Add a small amount of butter or oil to the skillet and swirl to coat.\nUsing a 1/4 cup measure, scoop the batter onto the skillet. Cook until bubbles appear on the surface of the pancake and the edges begin to dry, about 2-3 minutes.\nFlip the pancake and cook until the other side is golden brown, about 1-2 minutes more.\nRemove the pancake from the skillet and repeat with the remaining batter.\nServe the buttermilk pancakes hot with your favorite toppings, such as butter, maple syrup, whipped cream, or fresh fruit.\nEnjoy your delicious and fluffy buttermilk pancakes!",
        "image": "https://images.unsplash.com/photo-1614128867650-4d971a244a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=664&q=80", //Photo from Unsplash
        "source": "ChatGPT",
        "description": "The best pancake recipe artificial intelligence can create!",
    },
    {
        "title": "Best AI Generated Salad Recipe",
        "breakfast": false,
        "lunch": true,
        "dinner": false,
        "dessert": false,
        "favorite": true,
        "ingredients": "1 head of romaine lettuce, washed and chopped\n1 cucumber, sliced\n1 pint cherry tomatoes, halved\n1 red onion, sliced\n1 avocado, diced\n1/4 cup crumbled feta cheese\n1/4 cup extra-virgin olive oil\n2 tablespoons red wine vinegar\n1 tablespoon Dijon mustard\nSalt and freshly ground black pepper, to taste",
        "directions": "In a large mixing bowl, combine the chopped romaine lettuce, sliced cucumber, halved cherry tomatoes, and sliced red onion.\nAdd the diced avocado and crumbled feta cheese to the mixing bowl.\nIn a separate mixing bowl, whisk together the extra-virgin olive oil, red wine vinegar, and Dijon mustard. Season with salt and freshly ground black pepper to taste.\nPour the dressing over the salad and toss to combine.\nDivide the salad among 4 serving plates.\nServe immediately and enjoy your refreshing and healthy salad!\nNote: You can also add other ingredients to this salad, such as grilled chicken, roasted beets, or croutons, based on your preferences.",
        "image": "https://images.unsplash.com/photo-1543339318-b43dc53e19b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", //Photo from Unsplash
        "source": "ChatGPT",
        "description": "The best salad recipe artificial intelligence can create!",
    },
    {
        "title": "Best AI Generated Pasta Carbonara Recipe",
        "breakfast": false,
        "lunch": false,
        "dinner": true,
        "dessert": false,
        "favorite": true,
        "ingredients": "400g spaghetti or linguine\n150g pancetta or guanciale, diced\n4 large eggs\n1 cup grated Pecorino Romano cheese\n1/2 cup grated Parmigiano-Reggiano cheese\n3 cloves garlic, minced\nSalt and freshly ground black pepper, to taste\nOlive oil",
        "directions": "Bring a large pot of salted water to a boil. Add the spaghetti and cook until al dente, according to package instructions. Reserve 1/2 cup of pasta water and drain the rest.\nWhile the pasta is cooking, heat a large skillet over medium-high heat. Add a drizzle of olive oil, then add the diced pancetta or guanciale. Cook until browned and crisp, about 5-7 minutes.\nAdd the minced garlic to the skillet and cook for 1-2 minutes until fragrant.\nIn a separate bowl, whisk together the eggs, Pecorino Romano cheese, and Parmigiano-Reggiano cheese.\nOnce the pasta is cooked and drained, add it to the skillet with the pancetta or guanciale and garlic. Toss to combine.\nRemove the skillet from the heat and let it cool for 1-2 minutes. Then, slowly pour the egg and cheese mixture into the skillet, tossing continuously to coat the pasta evenly. If the mixture seems too thick, add some of the reserved pasta water to thin it out.\nSeason with salt and freshly ground black pepper to taste.\nServe hot and enjoy your delicious carbonara pasta!",
        "image": "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1094&q=80", //Photo from Unsplash
        "source": "ChatGPT",
        "description": "The best carbonara recipe artificial intelligence can create!",
    },
    {
        title: 'Best AI Generated Chocolate Chip Cookies Recipe',
        breakfast: false,
        lunch: false,
        dinner: false,
        dessert: true,
        favorite: true,
        ingredients: "2 1/4 cups all-purpose flour\n1 tsp baking soda\n1 tsp salt\n1 cup unsalted butter, at room temperature\n3/4 cup granulated sugar\n3/4 cup brown sugar\n2 large eggs\n2 tsp vanilla extract\n2 cups semi-sweet chocolate chips",
        directions: "Preheat the oven to 375°F (190°C) and line a baking sheet with parchment paper.\nIn a medium bowl, whisk together the flour, baking soda, and salt. Set aside.\nIn a large bowl, beat the butter, granulated sugar, and brown sugar with an electric mixer until light and fluffy.\nAdd the eggs one at a time, beating well after each addition.\nBeat in the vanilla extract.\nGradually mix in the dry ingredients until just combined.\nStir in the chocolate chips.\nUsing a cookie scoop or spoon, drop tablespoon-sized balls of dough onto the prepared baking sheet, spacing them about 2 inches apart.\nBake for 10-12 minutes, until the edges are golden brown and the centers are set.\nAllow the cookies to cool on the baking sheet for a few minutes before transferring them to a wire rack to cool completely. Enjoy!",
        image: 'https://images.unsplash.com/photo-1639678111962-88fffeb071cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', //Photo from Unsplash
        source: 'ChatGPT',
        description: 'The best cookie recipe artificial intelligence can create!'
    }
])
    .then(() => {
        console.log('success!')
        process.exit()
    })
    .catch(err => {
        console.log('Failure', err)
        process.exit()
    })

