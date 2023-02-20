const db = require('../models')
const { Recipe } = db
Recipe.create([
    {
        title: 'Best AI Generated Chocolate Chip Cookies Recipe',
        breakfast: false,
        lunch: false,
        dinner: false,
        dessert: true,
        favorite: true,
        ingredients: "2 1/4 cups all-purpose flour\n1 tsp baking soda\n1 tsp salt\n1 cup unsalted butter, at room temperature\n3/4 cup granulated sugar\n3/4 cup brown sugar\n2 large eggs\n2 tsp vanilla extract\n2 cups semi-sweet chocolate chips",
        directions: "Preheat the oven to 375°F (190°C) and line a baking sheet with parchment paper.\nIn a medium bowl, whisk together the flour, baking soda, and salt. Set aside.\nIn a large bowl, beat the butter, granulated sugar, and brown sugar with an electric mixer until light and fluffy.\nAdd the eggs one at a time, beating well after each addition.\nBeat in the vanilla extract.\nGradually mix in the dry ingredients until just combined.\nStir in the chocolate chips.\nUsing a cookie scoop or spoon, drop tablespoon-sized balls of dough onto the prepared baking sheet, spacing them about 2 inches apart.\nBake for 10-12 minutes, until the edges are golden brown and the centers are set.\nAllow the cookies to cool on the baking sheet for a few minutes before transferring them to a wire rack to cool completely. Enjoy!",
        image: 'https://images.unsplash.com/photo-1576186726580-a816e8b12896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80', //Photo by No Revisions on Unsplash
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