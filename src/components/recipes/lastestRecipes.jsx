import { Boxes } from "./Boxes";
import { getRecipes } from "../../services/api/recipes.js";

export function LastestRecipes() {
  return (
    <section className="relative flex flex-col justify-center items-center">
      <h2 className="text-sky-950 font-bold text-3xl mb-6">Latest Recipes</h2>
      <div className="relative grid grid-cols-4 grid-rows-1 w-full mx-auto my-0 gap-3 mb-6">
        {getRecipes
          .map((recipe) => {
            const { id, name, description, country, image, categories, flag } =
              recipe;

            return (
              <Boxes
                key={id}
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
      <button className="text-xl font-normal uppercase bg-sky-800 text-sky-100 w-full p-6 hover:bg-sky-950">
        See all recipes
      </button>
    </section>
  );
}
