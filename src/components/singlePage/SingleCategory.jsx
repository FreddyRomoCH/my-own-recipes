import { useParams } from "react-router-dom";
import { useGetRecipes } from "../../hooks/useGetRecipes.js";
import { Boxes } from "../recipes/Boxes.jsx";
import { NoCategoriesToShow } from "../NoCategoriesToShow.jsx";

export function SingleCategory() {
  const { name } = useParams();
  console.log(name);
  const categoryName = name.charAt(0).toUpperCase() + name.slice(1);

  const { recipes } = useGetRecipes({ category: name });
  const recipeList = recipes.map((recipe) => {
    const { id, name, description, country, image, categories, flag } = recipe;

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
  });

  return (
    <main className="relative max-w-6xl mx-auto">
      {recipes.length > 0 ? (
        <>
          <h2 className="text-sky-950 font-bold text-3xl my-6 text-center">
            {categoryName} Recipes
          </h2>
          <div className="relative grid grid-cols-4 grid-rows-1 w-full mx-auto my-0 gap-3 mb-6">
            {recipeList}
          </div>
        </>
      ) : (
        <NoCategoriesToShow name={categoryName} />
      )}
    </main>
  );
}
