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
    <header className="flex flex-col justify-center content-center items-center relative w-full p-4 text-sky-950 text-sm bg-gradient-to-b from-sky-100 to-sky-200">
      {IS_DEVELOPMENT && <Debugger />}

      <div className="container flex flex-row flex-wrap justify-around items-center content-center max-w-6xl">
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

            <Navs href="/add-recipe" title="Add Recipe" key="add-recipe" />
          </ul>
        </nav>

        <RecipesLogo />

        <nav className="flex-1">
          <ul className="relative flex flex-row justify-center gap-5 items-center">
            <Search />

            <Navs href="/sign-in" title="Sign In" key="sign-in" />

            <li className="group font-medium italic py-3 text-lg">{`Hi {User}`}</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
