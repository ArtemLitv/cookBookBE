const {gql} = require('apollo-server');

const typeDefs = gql`
    type Query {
        recipe(id: ID!): RecipeResponse
        recipes: RecipesResponse
    }

    type Mutation {
        addRecipe(caption: String): RecipeResponse
        removeRecipe(id: ID!): RecipeResponse
    }

    type Recipe {
        id: ID!
        caption: String
    }

    type RecipeResponse {
        succsess: Boolean
        message: String
        recipe: Recipe
    }

    type RecipesResponse {
        succsess: Boolean
        message: String
        recipes: [Recipe]
    }
`;

module.exports = typeDefs;