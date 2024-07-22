import { useGetRecipes } from "../../hooks/useGetRecipes.js";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export function SingleRecipe() {
  const { id } = useParams();
  const idParam = parseInt(id);
  const { recipes } = useGetRecipes({ category: undefined });

  //Get recipe information depending on the name

  const filteredRecipes = recipes.filter((recipe) => recipe.id === idParam);

  const singleRecipe = filteredRecipes.map((recipe) => {
    const {
      id,
      name,
      description,
      image,
      country,
      flag,
      categories,
      servings,
      prepTime,
      ingredients,
      instructions,
    } = recipe;

    const categoriesList = categories.map((category) => {
      return (
        <li key={category} className="font-thin text-sm">
          <Link to={`/category/${category}`}>{category}</Link>
        </li>
      );
    });

    const listOfIngredients = ingredients.map((ingredient, index) => {
      return <li key={`ingredient-${index}`}>- {ingredient}</li>;
    });

    const listOfInstructions = instructions.map((instruction, index) => {
      return (
        <li
          key={`intruction-${index}`}
          className="flex flex-row justify-start gap-4 items-center"
        >
          <span className="text-lg font-semibold">{`Step ${index + 1}:`}</span>
          <p>{instruction}</p>
        </li>
      );
    });

    return (
      <div
        key={id}
        className="flex flex-col justify-center items-center w-[80%] content-center mx-auto"
      >
        <h2 className="text-sky-950 font-bold text-3xl text-center">{name}</h2>
        <ul className="flex flex-row gap-2 mb-4">{categoriesList}</ul>

        <div className="main-image relative h-80 w-full mb-4 overflow-hidden rounded">
          <picture>
            <div className="absolute top-4 left-4 text-3xl z-10">{flag}</div>
            <img
              src={image}
              alt={`Cover ${name}`}
              className="absolute object-cover top-0 left-0 w-full h-full hover:scale-110 transition-transform duration-500 ease-in-out"
            />
          </picture>
        </div>

        <section className="information rounded bg-sky-100 text-sky-950 w-full mb-4 p-4">
          <p className="text-base font-medium mb-4">{description}</p>
          <ul className="flex flex-row justify-around">
            <li>
              <strong>Servings:</strong> {servings}
            </li>
            <li>
              <strong>Prep Time:</strong> {prepTime}
            </li>
            <li>
              <strong>Country:</strong> {country}
            </li>
          </ul>
        </section>

        <section className="preparation rounded bg-sky-100 text-sky-950 w-full mb-4 p-4">
          <div className="information flex flex-row justify-center gap-6">
            <ul className="shrink flex flex-col gap-4 bg-sky-900 text-sky-100 p-4 box-border rounded font-thin">
              <li>
                <span className="font-semibold text-lg">Ingredients:</span>
              </li>
              {listOfIngredients ? (
                listOfIngredients
              ) : (
                <li>No ingredients added yet</li>
              )}
            </ul>

            <ul className="grow flex flex-col gap-4 p-4 box-border rounded font-thin">
              <li>
                <span className="font-semibold text-lg">Instructions:</span>
                {listOfInstructions ? (
                  listOfInstructions
                ) : (
                  <li>No instructions added yet</li>
                )}
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  });

  return (
    <main className="relative max-w-6xl mx-auto">
      <section className="my-6">
        {singleRecipe.length === 1 ? singleRecipe : <h1>Not Found</h1>}
      </section>
    </main>
  );
}
