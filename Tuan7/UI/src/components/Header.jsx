function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="/">
          <img src="/logo.png" alt="Chefify" />
        </a>

        <div className="search-box">
          <img src="/search.png" alt="" aria-hidden="true" />
          <input type="text" placeholder="What would you like to cook?" readOnly />
        </div>

        <nav className="header-menu" aria-label="Main navigation">
          <a href="/">What to cook</a>
          <a href="/">Recipes</a>
          <a href="/">Ingredients</a>
          <a href="/">Occasions</a>
          <a href="/">About Us</a>
        </nav>

        <div className="header-actions">
          <button type="button" className="btn btn-login">
            Login
          </button>
          <button type="button" className="btn btn-subscribe">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
