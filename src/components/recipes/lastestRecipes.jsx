import { Boxes } from "./Boxes";
import { useGetRecipes } from "../../hooks/useGetRecipes.js";
import { Link } from "react-router-dom";

export function LastestRecipes() {
  const { recipes } = useGetRecipes({ category: null });

  const listOfRecipes = recipes
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
    .reverse()
    .slice(0, 4);

  return (
    <section className="relative flex flex-col justify-center items-center">
      <h2 className="text-sky-950 font-bold text-3xl mb-6">Latest Recipes</h2>
      <div className="grid grid-cols-boxes gap-4 mb-6 w-full">
        {listOfRecipes ? (
          listOfRecipes
        ) : (
          <h2 className="text-sky-950 font-medium text-3xl my-6 text-center">
            No recipes have been added yet
          </h2>
        )}
      </div>
      <Link
        to="/recipes"
        className="text-xl font-normal uppercase bg-sky-800 text-sky-100 w-full p-6 hover:bg-sky-950 text-center"
      >
        See all recipes
      </Link>
    </section>
  );
}
