import { Boxes } from "./Boxes";
import { useGetRecipes } from "../../hooks/useGetRecipes.js";
import { Link } from "react-router-dom";

export function LastestRecipes() {
  const { recipes } = useGetRecipes({ category: null });

  return (
    <section className="relative flex flex-col justify-center items-center">
      <h2 className="text-sky-950 font-bold text-3xl mb-6">Latest Recipes</h2>
      <div className="relative grid grid-cols-4 grid-rows-1 w-full mx-auto my-0 gap-3 mb-6">
        {recipes
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
          .slice(0, 4)}
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
