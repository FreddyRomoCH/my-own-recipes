import { Navs } from "./Navs.jsx";

import RecipesLogo from "../../assets/icons/logo.svg";

export function Header() {
  return (
    <header className="fixed flex flex-row flex-wrap justify-between items-center content-center w-full p-4 text-sky-950 text-sm bg-gradient-to-b from-sky-100 to-sky-200">
      <nav className="flex-1">
        <ul className="relative flex flex-row justify-center gap-5 items-center">
          <Navs href="/recipes" title="All Recipes">
            <Navs title="Chicken" href="/chicken" />
            <Navs title="Beef" href="/beef" />
            <Navs title="Vegetarian" href="/vegetarian" />
            <Navs title="Sea Food" href="/seafood" />
          </Navs>

          <Navs href="/country" title="By Country">
            <Navs title="Finland" href="/finland" />
            <Navs title="Chile" href="/chile" />
            <Navs title="Australia" href="/australia" />
            <Navs title="Spain" href="/spain" />
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
          <Navs href="/add-recipe" title="Add Recipe" />
          <Navs href="/sign-in" title="Sign In" />
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
