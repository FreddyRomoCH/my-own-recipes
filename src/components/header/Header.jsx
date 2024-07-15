import { Navs } from "./Navs.jsx";

import RecipesLogo from "../../assets/icons/logo.svg";
import { categories } from "../../services/categories.js";
import { countries } from "../../services/countries.js";

export function Header() {
  return (
    <header className="relative flex flex-row flex-wrap justify-between items-center content-center w-full p-4 text-sky-950 text-sm bg-gradient-to-b from-sky-100 to-sky-200">
      <nav className="flex-1">
        <ul className="relative flex flex-row justify-center gap-5 items-center">
          <Navs href="/recipes" title="All Recipes" id="all-recipes">
            {categories.map((category) => {
              const { title, href, id } = category;
              return <Navs title={title} href={href} id={id} key={id} />;
            })}
          </Navs>

          <Navs href="/country" title="By Country" id="by-country">
            {countries.map((country) => {
              const { name, link, short } = country;
              return <Navs title={name} href={link} id={short} key={name} />;
            })}
          </Navs>
        </ul>
      </nav>

      <picture>
        <a href="/">
          <img
            className="w-24 shadow-lg shadow-sky-700 rounded-full"
            src={RecipesLogo}
            alt="Recipe Logo"
          />
        </a>
      </picture>

      <nav className="flex-1">
        <ul className="relative flex flex-row justify-center gap-5 items-center">
          <Navs href="/add-recipe" title="Add Recipe" id="add-recipe" />
          <Navs href="/sign-in" title="Sign In" id="sign-in" />
          <input
            className="rounded-md p-1 text-sky-950 border-2 border-transparent focus:border-sky-600 focus:ring-0 focus:outline-none box-border"
            type="text"
            placeholder="Search..."
          />
        </ul>
      </nav>
    </header>
  );
}
