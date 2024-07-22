import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home.jsx";
import { AllRecipes } from "./components/recipes/AllRecipes.jsx";
import { SingleCategory } from "./components/singlePage/SingleCategory.jsx";
import { SingleRecipe } from "./components/singlePage/SingleRecipe.jsx";
import { Footer } from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<AllRecipes />} />
        <Route path="/recipes/:id/:name" element={<SingleRecipe />}></Route>
        <Route path="/category/:name" element={<SingleCategory />}></Route>
        <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
