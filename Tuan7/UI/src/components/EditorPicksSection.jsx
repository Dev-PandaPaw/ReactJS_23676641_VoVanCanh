import BookmarkIcon from "./BookmarkIcon.jsx";
import SectionHeading from "./SectionHeading.jsx";

function EditorPicksSection({ items }) {
  return (
    <section className="content-section editor-section">
      <SectionHeading
        title="Editor&apos;s pick"
        subtitle="Curated Culinary Delights: Handpicked Favorites by Our Expert Editors!"
      />

      <div className="editor-grid">
        {items.map((item) => (
          <article className="editor-card" key={item.id}>
            <img className="editor-card__image" src={item.image} alt={item.title} />

            <div className="editor-card__content">
              <div className="editor-card__header">
                <div>
                  <h3>{item.title}</h3>
                  <span className="editor-card__time">{item.duration}</span>
                </div>
                <button type="button" className="bookmark-button" aria-label={`Save ${item.title}`}>
                  <BookmarkIcon />
                </button>
              </div>

              <div className="editor-card__author">
                <img src={item.avatar} alt={item.author} />
                <span>{item.author}</span>
              </div>

              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default EditorPicksSection;
