import { useState } from 'react'
import { motion } from 'framer-motion'
import BookCard from '../components/BookCard'
import { books, categories } from '../data/books'
import './Browse.css'

export default function Browse() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('name')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter and sort books
  const displayBooks = books
    .filter(book => {
      const matchesCategory = selectedCategory === 'All' || book.category === selectedCategory
      const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           book.author.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'name':
        default:
          return a.title.localeCompare(b.title)
      }
    })

  return (
    <div className="browse-page">
      {/* Page Hero */}
      <motion.div 
        className="browse-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <h1>Browse Our Collection</h1>
          <p>Discover {books.length} amazing books across {categories.length} categories</p>
          
          {/* Search Bar */}
          <div className="browse-search">
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <input
              type="text"
              placeholder="Search by title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button 
                className="clear-search"
                onClick={() => setSearchQuery('')}
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container">
        <div className="browse-content">
          {/* Sidebar Filters */}
          <aside className="browse-sidebar">
            <div className="filter-section">
              <h3>Categories</h3>
              <div className="category-list">
                <button
                  className={`category-btn ${selectedCategory === 'All' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('All')}
                >
                  <span>All Books</span>
                  <span className="count">{books.length}</span>
                </button>
                {categories.map(category => {
                  const count = books.filter(b => b.category === category).length
                  return (
                    <button
                      key={category}
                      className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      <span>{category}</span>
                      <span className="count">{count}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="filter-section">
              <h3>Sort By</h3>
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-select"
              >
                <option value="name">Name (A-Z)</option>
                <option value="rating">Best Rating</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>

            {/* Price Range Info */}
            <div className="filter-section">
              <h3>Price Range</h3>
              <div className="price-ranges">
                <div className="price-range-item">
                  <span>Budget</span>
                  <span className="price-text">Under $15</span>
                  <span className="count">{books.filter(b => b.price < 15).length}</span>
                </div>
                <div className="price-range-item">
                  <span>Mid-range</span>
                  <span className="price-text">$15 - $30</span>
                  <span className="count">{books.filter(b => b.price >= 15 && b.price <= 30).length}</span>
                </div>
                <div className="price-range-item">
                  <span>Premium</span>
                  <span className="price-text">Over $30</span>
                  <span className="count">{books.filter(b => b.price > 30).length}</span>
                </div>
              </div>
            </div>

            {/* Collection Stats */}
            <div className="filter-section collection-stats">
              <h3>Collection Stats</h3>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">{books.length}</span>
                  <span className="stat-label">Total Books</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{categories.length}</span>
                  <span className="stat-label">Categories</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{books.filter(b => b.rating >= 4.7).length}</span>
                  <span className="stat-label">Top Rated</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">{books.filter(b => b.reviews && b.reviews.length > 0).length}</span>
                  <span className="stat-label">Reviewed</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Books Grid */}
          <div className="browse-books">
            <div className="results-header">
              <h2>
                {searchQuery ? `Search Results for "${searchQuery}"` : 
                 selectedCategory === 'All' ? 'All Books' : selectedCategory}
              </h2>
              <p className="results-count">
                Showing {displayBooks.length} {displayBooks.length === 1 ? 'book' : 'books'}
              </p>
            </div>

            {displayBooks.length > 0 ? (
              <motion.div 
                className="book-grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {displayBooks.map((book, index) => (
                  <BookCard key={book.id} book={book} index={index} />
                ))}
              </motion.div>
            ) : (
              <div className="no-results">
                <p>📚 No books found</p>
                <p>Try adjusting your filters or search query</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => {
                    setSelectedCategory('All')
                    setSearchQuery('')
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
