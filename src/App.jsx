import { Header } from "./components/header/Header";
import { CategoriesSlider } from "./components/slider/CategoriesSlider";
import { LastestRecipes } from "./components/recipes/lastestRecipes";
import { Footer } from "./components/footer/Footer";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <main className="relative max-w-6xl mx-auto">
        <CategoriesSlider />
        <LastestRecipes />
      </main>
      <Footer />
    </>
  );
}

export default App;
