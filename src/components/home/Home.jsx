import { CategoriesSlider } from "../slider/CategoriesSlider.jsx";
import { LastestRecipes } from "../recipes/lastestRecipes.jsx";

export function Home() {
  return (
    <main className="relative max-w-6xl mx-auto">
      <CategoriesSlider />
      <LastestRecipes />
    </main>
  );
}
