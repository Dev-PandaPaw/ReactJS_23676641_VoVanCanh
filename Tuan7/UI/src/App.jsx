import Header from "./components/Header.jsx";
import HeroSection from "./components/HeroSection.jsx";
import RecipeGridSection from "./components/RecipeGridSection.jsx";
import EditorPicksSection from "./components/EditorPicksSection.jsx";
import Footer from "./components/Footer.jsx";
import { editorPicks, summerRecipes, videoRecipes } from "./data/content.js";
import "./App.css";

function App() {
  return (
    <div className="page-shell">
      <Header />
      <HeroSection />
      <main className="page-content">
        <RecipeGridSection
          title="This Summer Recipes"
          subtitle="We have all your Independence Day sweets covered."
          items={summerRecipes}
        />
        <RecipeGridSection
          title="Recipes With Videos"
          subtitle="Cooking Up Culinary Creations with Step-by-Step Videos"
          items={videoRecipes}
        />
        <EditorPicksSection items={editorPicks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
