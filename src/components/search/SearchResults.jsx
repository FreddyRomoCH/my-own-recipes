import { useRecipes } from "../../hooks/useRecipes.js";

export function SearchResults({ search }) {
  const { recipes } = useRecipes({ search });

  return (
    <div className="results absolute top-14 z-40 w-full bg-sky-100 rounded p-3">
      <ul className="flex flex-col justify-start gap-1">
        {recipes.length === 0 ? (
          <li>No results found</li>
        ) : (
          recipes
            .map((recipe) => {
              return (
                <li key={recipe.id}>
                  <a
                    href={`/${recipe.name
                      .toLocaleLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {recipe.name}
                  </a>
                </li>
              );
            })
            .slice(0, 10)
        )}
      </ul>
    </div>
  );
}
