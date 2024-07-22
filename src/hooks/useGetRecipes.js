import { getRecipes } from "../services/api/recipes";

export function useGetRecipes({ category }) {
  let recipes = [];

  if (!category) {
    recipes = getRecipes;
    return { recipes };
  }

  recipes = getRecipes.filter((recipe) =>
    recipe.categories.includes(category)
  );

  return { recipes };
}
