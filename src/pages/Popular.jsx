import { useState } from 'react'
import { motion } from 'framer-motion'
import BookCard from '../components/BookCard'
import { popularBooks, books } from '../data/books'
import './Popular.css'

export default function Popular() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('rating')
  const [priceRange, setPriceRange] = useState([0, 50])

  // Get all categories
  const categories = ['All', ...new Set(books.map(b => b.category))]

  // Filter and sort books
  let displayBooks = selectedCategory === 'All' 
    ? popularBooks 
    : popularBooks.filter(b => b.category === selectedCategory)

  // Filter by price
  displayBooks = displayBooks.filter(b => b.price >= priceRange[0] && b.price <= priceRange[1])

  // Sort books
  displayBooks = [...displayBooks].sort((a, b) => {
    switch(sortBy) {
      case 'rating':
        return b.rating - a.rating
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'name':
        return a.title.localeCompare(b.title)
      case 'reviews':
        return (b.reviews?.length || 0) - (a.reviews?.length || 0)
      default:
        return 0
    }
  })

  return (
    <div className="popular-page">
      <motion.div 
        className="page-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="container">
          <h1>🔥 Popular Books</h1>
          <p>Most loved by our readers - trending now!</p>
        </div>
      </motion.div>

      <div className="container">
        <div className="page-content">
          {/* Sidebar Filters */}
          <aside className="filters-sidebar">
            <div className="filter-section">
              <h3>Categories</h3>
              <div className="filter-options">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Sort By</h3>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviewed</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>

            <div className="filter-section">
              <h3>Price Range</h3>
              <div className="price-range">
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="price-slider"
                />
                <p className="price-label">Up to ${priceRange[1]}</p>
              </div>
            </div>

            <div className="filter-section">
              <h3>Quick Filters</h3>
              <div className="quick-filters">
                <button 
                  className="quick-filter-btn"
                  onClick={() => setPriceRange([0, 15])}
                >
                  Under $15
                </button>
                <button 
                  className="quick-filter-btn"
                  onClick={() => setSortBy('rating')}
                >
                  Top Rated
                </button>
                <button 
                  className="quick-filter-btn"
                  onClick={() => {
                    setSelectedCategory('All')
                    setPriceRange([0, 50])
                    setSortBy('rating')
                  }}
                >
                  Reset All
                </button>
              </div>
            </div>
          </aside>

          {/* Books Grid */}
          <div className="books-section">
            <div className="results-header">
              <h2>Showing {displayBooks.length} books</h2>
              <p className="filter-summary">
                {selectedCategory !== 'All' && `${selectedCategory} • `}
                ${priceRange[0]} - ${priceRange[1]}
              </p>
            </div>
            
            <div className="book-grid">
              {displayBooks.map((book, index) => (
                <BookCard key={book.id} book={book} index={index} />
              ))}
            </div>

            {displayBooks.length === 0 && (
              <div className="no-results">
                <p>😢 No books found with these filters</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    setSelectedCategory('All')
                    setPriceRange([0, 50])
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
