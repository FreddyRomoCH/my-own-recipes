import { Header } from "./components/header/Header";
import { CategoriseSlider } from "./components/slider/CategoriesSlider";
import { LastestRecipes } from "./components/recipes/lastestRecipes";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main className="relative max-w-6xl mx-auto">
        <CategoriseSlider />
        <LastestRecipes />
      </main>
    </>
  );
}

export default App;
