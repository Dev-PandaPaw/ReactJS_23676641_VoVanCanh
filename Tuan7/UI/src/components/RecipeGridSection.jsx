import BookmarkIcon from "./BookmarkIcon.jsx";
import SectionHeading from "./SectionHeading.jsx";

function RecipeGridSection({ title, subtitle, items }) {
  return (
    <section className="content-section recipe-grid-section">
      <SectionHeading title={title} subtitle={subtitle} />

      <div className="recipe-grid">
        {items.map((item) => (
          <article className="recipe-grid-card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="recipe-grid-card__body">
              <div className="recipe-grid-card__top">
                <h3>{item.title}</h3>
                <button
                  type="button"
                  className="bookmark-button"
                  aria-label={`Save ${item.title}`}
                >
                  <BookmarkIcon />
                </button>
              </div>
              <span className="time-pill">{item.duration}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default RecipeGridSection;
