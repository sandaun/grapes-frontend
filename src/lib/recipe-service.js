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

}

const recipes = new Recipes();

export default recipes;
