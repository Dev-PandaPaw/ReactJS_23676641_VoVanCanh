import { footerLinks } from "../data/content.js";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__newsletter">
          <h3>About Us</h3>
          <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
          <div className="footer-form">
            <input type="text" placeholder="Enter your email" readOnly />
            <button type="button">Send</button>
          </div>
        </div>

        <div className="site-footer__links">
          <div>
            <h4>Learn More</h4>
            {footerLinks.learnMore.map((item) => (
              <a href="/" key={item}>
                {item}
              </a>
            ))}
          </div>

          <div>
            <h4>Shop</h4>
            {footerLinks.shop.map((item) => (
              <a href="/" key={item}>
                {item}
              </a>
            ))}
          </div>

          <div>
            <h4>Recipes</h4>
            {footerLinks.recipes.map((item) => (
              <a href="/" key={item}>
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="site-footer__bottom">
          <div className="site-footer__brand">
            <img src="/logo.png" alt="Chefify" />
          </div>
          <span>2023 Chefify Company</span>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
