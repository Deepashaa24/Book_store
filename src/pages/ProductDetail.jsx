import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { books } from '../data/books'
import './ProductDetail.css'

export default function ProductDetail() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const book = books.find(b => b.id === id)

  if (!book) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>Book not found</h2>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <motion.div
      className="product-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <Link to="/" className="back-link">← Back to Books</Link>
        
        <div className="product-content">
          <div className="product-image-section">
            <img src={book.image} alt={book.title} className="product-image" />
          </div>

          <div className="product-info-section">
            <span className="product-category">{book.category}</span>
            <h1>{book.title}</h1>
            <p className="product-author">by {book.author}</p>
            
            <div className="product-rating">
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <span className="rating-value">{book.rating} / 5.0</span>
              <span className="review-count">({book.reviews?.length || 0} reviews)</span>
            </div>

            <div className="product-price">
              <span className="price-value">${book.price.toFixed(2)}</span>
            </div>

            <p className="product-description">{book.description}</p>

            <div className="product-actions">
              <button 
                className="btn btn-primary btn-large"
                onClick={() => addToCart(book)}
              >
                Add to Cart
              </button>
              <button className="btn btn-secondary btn-large">
                Add to Wishlist ♡
              </button>
            </div>

            <div className="product-meta">
              <div className="meta-item">
                <strong>Category:</strong> {book.category}
              </div>
              <div className="meta-item">
                <strong>Author:</strong> {book.author}
              </div>
            </div>
          </div>
        </div>

        {book.reviews && book.reviews.length > 0 && (
          <div className="reviews-section">
            <h2>Customer Reviews</h2>
            <div className="reviews-list">
              {book.reviews.map((review, index) => (
                <div key={index} className="review-card">
                  <div className="review-header">
                    <strong>{review.user}</strong>
                    <span className="review-rating">{'⭐'.repeat(review.rating)}</span>
                  </div>
                  <p>{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
