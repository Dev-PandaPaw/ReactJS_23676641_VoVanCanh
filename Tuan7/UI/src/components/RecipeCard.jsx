function RecipeCard() {
  return (
    <article className="recipe-card">
      <button type="button" className="btn recipe-tag">
        Recipe of the day
      </button>

      <h1 className="recipe-title">Salad Caprese</h1>

      <p className="recipe-description">
        Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella, herbs, olive oil, and
        balsamic vinegar create a refreshing dish for lunch or appetizer.
      </p>

      <div className="recipe-author">
        <img src="/avatar.png" alt="Salad Caprese" />
        <span>Salad Caprese</span>
      </div>

      <button type="button" className="btn recipe-cta">
        View now <span>&rarr;</span>
      </button>
    </article>
  );
}

export default RecipeCard;
