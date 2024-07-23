import { useGetRecipes } from "../../hooks/useGetRecipes.js";
import { Boxes } from "./Boxes.jsx";

export function AllRecipes() {
  const { recipes } = useGetRecipes({ category: null });

  const recipesList = recipes
    .map((recipe) => {
      const { id, name, description, country, image, categories, flag } =
        recipe;

      return (
        <Boxes
          key={id}
          id={id}
          image={image}
          title={name}
          desc={description}
          country={country}
          categories={categories}
          flag={flag}
        />
      );
    })
    .reverse();

  return (
    <main className="relative max-w-6xl mx-auto">
      {recipesList ? (
        <>
          <h2 className="text-sky-950 font-bold text-3xl my-6 text-center">
            All Recipes
          </h2>
          <div className="grid grid-cols-boxes gap-4 mb-6 w-full">
            {recipesList}
          </div>
        </>
      ) : (
        <h2 className="text-sky-950 font-medium text-3xl my-6 text-center">
          No recipes have been added yet
        </h2>
      )}
    </main>
  );
}
