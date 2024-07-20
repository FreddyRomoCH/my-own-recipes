import RecipesLogoSVG from "../../assets/icons/logo.svg";

export function RecipesLogo() {
  return (
    <picture>
      <a href="/">
        <img
          className="w-24 shadow-lg shadow-sky-700 rounded-full"
          src={RecipesLogoSVG}
          alt="Recipe Logo"
        />
      </a>
    </picture>
  );
}
