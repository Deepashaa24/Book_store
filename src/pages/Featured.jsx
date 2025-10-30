import { useState } from 'react'
import { motion } from 'framer-motion'
import BookCard from '../components/BookCard'
import { featuredBooks, books } from '../data/books'
import './Featured.css'

export default function Featured() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('rating')

  // Get all categories
  const categories = ['All', ...new Set(books.map(b => b.category))]

  // Filter and sort books
  let displayBooks = selectedCategory === 'All' 
    ? featuredBooks 
    : featuredBooks.filter(b => b.category === selectedCategory)

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
      default:
        return 0
    }
  })

  return (
    <div className="featured-page">
      <motion.div 
        className="page-hero"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="container">
          <h1>✨ Featured Books</h1>
          <p>Our handpicked collection of the finest reads</p>
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
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>

            <div className="filter-section">
              <h3>Price Range</h3>
              <div className="price-info">
                <p>Min: ${Math.min(...displayBooks.map(b => b.price)).toFixed(2)}</p>
                <p>Max: ${Math.max(...displayBooks.map(b => b.price)).toFixed(2)}</p>
              </div>
            </div>
          </aside>

          {/* Books Grid */}
          <div className="books-section">
            <div className="results-header">
              <h2>Showing {displayBooks.length} books</h2>
            </div>
            
            <div className="book-grid">
              {displayBooks.map((book, index) => (
                <BookCard key={book.id} book={book} index={index} />
              ))}
            </div>

            {displayBooks.length === 0 && (
              <div className="no-results">
                <p>No books found in this category</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
