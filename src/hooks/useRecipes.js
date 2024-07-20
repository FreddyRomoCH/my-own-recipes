import { useEffect, useState } from "react";
import { getRecipes } from "../services/api/recipes"

export function useRecipes({ search }) {
    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
      const matchedRecipes = getRecipes.filter((recipe) => {
        return (
          recipe.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
          recipe.categories.find((category) => category.toLocaleLowerCase().includes(search.toLocaleLowerCase())) ||
          recipe.country.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        );
      });
  
      setRecipes(matchedRecipes);
    }, [search]);
  
    return { recipes };
  }