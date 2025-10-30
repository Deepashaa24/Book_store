import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import './BookCard.css'

export default function BookCard({ book, index = 0 }) {
  const { addToCart } = useCart()

  return (
    <motion.div
      className="book-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Link to={`/book/${book.id}`} className="book-link">
        <div className="book-image-wrapper">
          <img src={book.image} alt={book.title} className="book-image" />
        </div>
        <div className="book-info">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">{book.author}</p>
          <div className="book-meta">
            <span className="book-price">${book.price.toFixed(2)}</span>
            <span className="book-rating">
              ⭐ {book.rating}
            </span>
          </div>
        </div>
      </Link>
      <button
        className="add-to-cart-btn"
        onClick={(e) => {
          e.preventDefault()
          addToCart(book)
        }}
      >
        Add to Cart
      </button>
    </motion.div>
  )
}
