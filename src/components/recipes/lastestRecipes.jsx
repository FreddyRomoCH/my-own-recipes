import { Boxes } from "./Boxes";
import { recipes } from "../../services/recipes.js";

export function LastestRecipes() {
  return (
    <section className="relative flex flex-col justify-center items-center">
      <h2 className="text-sky-950 font-bold text-3xl mb-6">Latest Recipes</h2>
      <div className="relative grid grid-cols-4 grid-rows-2 w-full mx-auto my-0 gap-3">
        {recipes.map((recipe) => {
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
        })}
      </div>
    </section>
  );
}
