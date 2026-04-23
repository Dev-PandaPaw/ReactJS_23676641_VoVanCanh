import RecipeCard from "./RecipeCard.jsx";

function HeroSection() {
  return (
    <section className="hero">
      <img className="hero-image" src="/background.png" alt="Chef cooking in kitchen" />
      <div className="hero__inner">
        <RecipeCard />
      </div>
    </section>
  );
}

export default HeroSection;
