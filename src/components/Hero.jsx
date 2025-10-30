import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  // Smooth scroll to featured section
  const scrollToFeatured = (e) => {
    e.preventDefault()
    const featuredSection = document.querySelector('.featured-section')
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Discover Your Next Favorite Story</h1>
            <p>Explore our curated collection of timeless classics and contemporary masterpieces</p>
            <div className="hero-buttons">
              <Link to="/browse" className="btn btn-primary">
                Browse Collection
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{marginLeft: '8px'}}>
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </Link>
              <button onClick={scrollToFeatured} className="btn btn-secondary">
                Featured Books
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{marginLeft: '8px'}}>
                  <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">48+</span>
                <span className="stat-label">Books</span>
              </div>
              <div className="stat">
                <span className="stat-number">7</span>
                <span className="stat-label">Categories</span>
              </div>
              <div className="stat">
                <span className="stat-number">4.7★</span>
                <span className="stat-label">Avg Rating</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&auto=format&fit=crop&q=60"
              alt="Featured Book Collection"
            />
            <div className="hero-image-overlay">
              <div className="overlay-content">
                <h3>New Arrivals</h3>
                <p>Fresh picks every week</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
