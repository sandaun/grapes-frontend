import axios from "axios";

class Recipes {
  constructor() {
    this.recipes = axios.create({
      baseURL: process.env.REACT_APP_API_PUBLIC_URL,
      withCredentials: true
    });
  }

  seaechRecipes(food) {
    const { individualFood } = food;
    return this.recipes
      .get('/recipes/recipelist/?query=' + individualFood)
      .then(({ data }) => data);
  }

  readFavorites () {
    return this.recipes
    .get("recipes/favorite")
    .then(({ data }) => data);
  }
  
  addFavoriteRecipe (favoriteId) {
    return this.recipes
      .put(`recipes/favorite/${favoriteId}`)
      .then(({ data }) => data);
  }

  deleteFavoriteRecipe (favoriteId) {
    return this.recipes
      .post(`recipes/favorite/delete/${favoriteId}`)
      .then(({ data }) => data);
  }

}

const recipes = new Recipes();

export default recipes;
