import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Booksaw</h3>
            <p>Your elegant online bookstore. Discover stories that inspire.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/">Featured</a></li>
              <li><a href="/">Popular</a></li>
              <li><a href="/">Offers</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="/">Help Center</a></li>
              <li><a href="/">Contact Us</a></li>
              <li><a href="/">Shipping Info</a></li>
              <li><a href="/">Returns</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Pinterest">📌</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Booksaw. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
