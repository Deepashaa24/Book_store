import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import BookCard from '../components/BookCard'
import { books, popularBooks, featuredBooks, newArrivals, budgetPicks } from '../data/books'
import './Home.css'

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      
      {/* Featured Books Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>✨ Featured Books</h2>
            <p>Handpicked selections from our collection</p>
            <div className="section-info">
              <div className="info-cards">
                <div className="info-card">
                  <span className="info-icon">⭐</span>
                  <div>
                    <h4>Top Rated</h4>
                    <p>Books with 4.7+ rating</p>
                  </div>
                </div>
                <div className="info-card">
                  <span className="info-icon">🏆</span>
                  <div>
                    <h4>Award Winners</h4>
                    <p>Critically acclaimed</p>
                  </div>
                </div>
                <div className="info-card">
                  <span className="info-icon">🎯</span>
                  <div>
                    <h4>Curated</h4>
                    <p>Hand-selected by experts</p>
                  </div>
                </div>
              </div>
              <Link to="/featured" className="view-all-link">
                View All Featured →
              </Link>
            </div>
          </div>
          
          <div className="book-grid">
            {featuredBooks.map((book, index) => (
              <BookCard key={book.id} book={book} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Books Section */}
      <section className="popular-section">
        <div className="container">
          <div className="section-header">
            <h2>🔥 Popular Right Now</h2>
            <p>Most loved by our readers</p>
            <Link to="/popular" className="view-all-link">
              View All Popular →
            </Link>
          </div>
          
          <div className="book-grid">
            {popularBooks.map((book, index) => (
              <BookCard key={book.id} book={book} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="new-arrivals-section">
        <div className="container">
          <div className="section-header">
            <h2>🆕 New Arrivals</h2>
            <p>Fresh additions to our bookshelf</p>
            <div className="arrival-info">
              <span className="badge">Updated Weekly</span>
              <span className="badge">Latest Releases</span>
            </div>
          </div>
          
          <div className="book-grid">
            {newArrivals.map((book, index) => (
              <BookCard key={book.id} book={book} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Budget Picks Section */}
      <section className="budget-section">
        <div className="container">
          <div className="section-header">
            <h2>💰 Budget Picks</h2>
            <p>Great reads under $15</p>
            <div className="budget-info">
              <span className="price-badge">Starting at $8.99</span>
            </div>
          </div>
          
          <div className="book-grid">
            {budgetPicks.map((book, index) => (
              <BookCard key={book.id} book={book} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Browse Collection CTA */}
      <section className="browse-cta-section">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Explore Our Full Collection</h2>
              <p>Browse through {books.length} carefully curated books across 7 different categories</p>
              <Link to="/browse" className="btn btn-primary">
                Browse All Books
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{marginLeft: '8px'}}>
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Link>
            </div>
            <div className="cta-features">
              <div className="feature">
                <span className="feature-icon">📖</span>
                <h4>48+ Books</h4>
                <p>Diverse collection</p>
              </div>
              <div className="feature">
                <span className="feature-icon">🎨</span>
                <h4>7 Categories</h4>
                <p>Find your genre</p>
              </div>
              <div className="feature">
                <span className="feature-icon">⭐</span>
                <h4>Top Rated</h4>
                <p>Quality assured</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="download-app-section">
        <div className="container">
          <div className="download-content">
            <div className="download-text">
              <h2>Take Your Library Anywhere</h2>
              <p>Download our app and access your favorite books on any device, anytime, anywhere.</p>
              <div className="app-buttons">
                <button className="app-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                  </svg>
                  <div>
                    <small>Download on the</small>
                    <strong>App Store</strong>
                  </div>
                </button>
                <button className="app-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div>
                    <small>Get it on</small>
                    <strong>Google Play</strong>
                  </div>
                </button>
              </div>
            </div>
            <div className="download-image">
              <img 
                src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600&auto=format&fit=crop&q=60"
                alt="Mobile App"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
