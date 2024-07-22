import { RecipesLogo } from "./RecipesLogo.jsx";
import { Navs } from "./Navs.jsx";
import { Search } from "../search/Search.jsx";
import { useCategories } from "../../hooks/useCategories.js";
import { useGetCountries } from "../../hooks/useCountries.js";
import { Debugger } from "../Debugger.jsx";
import { IS_DEVELOPMENT } from "../../config.js";

export function Header() {
  const { listCategories } = useCategories();
  const { listAllCountries } = useGetCountries();

  return (
    <header className="relative flex flex-row flex-wrap justify-between items-center content-center w-full p-4 text-sky-950 text-sm bg-gradient-to-b from-sky-100 to-sky-200">
      {IS_DEVELOPMENT && <Debugger />}

      <nav className="flex-1">
        <ul className="relative flex flex-row justify-center gap-5 items-center">
          <Navs href="recipes" title="By Recipes" id="all-recipes">
            {listCategories.length > 0 ? (
              listCategories.map((category) => {
                const { title, id } = category;
                return <Navs title={title} key={`category-${id}`} />;
              })
            ) : (
              <Navs title="No categories to show" />
            )}
          </Navs>

          <Navs href="/country" title="By Country" id="by-country">
            {listAllCountries.length > 0 ? (
              listAllCountries.map((country) => {
                const { name, short } = country;
                return <Navs title={name} key={`category-${short}`} />;
              })
            ) : (
              <Navs title="No countries to show" />
            )}
          </Navs>
        </ul>
      </nav>

      <RecipesLogo />

      <nav className="flex-1">
        <ul className="relative flex flex-row justify-center gap-5 items-center">
          <Navs href="/add-recipe" title="Add Recipe" key="add-recipe" />
          <Navs href="/sign-in" title="Sign In" key="sign-in" />
          <Search />
        </ul>
      </nav>
    </header>
  );
}
