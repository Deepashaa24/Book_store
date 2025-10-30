import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useCart } from '../context/CartContext'
import './Navbar.css'

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('')
  const { getCartCount } = useCart()
  const cartCount = getCartCount()

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="brand">
            <h2>Booksaw</h2>
          </Link>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search books, authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
            </svg>
          </div>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/featured">Featured</Link>
            <Link to="/popular">Popular</Link>
            <Link to="/account">Account</Link>
            <Link to="/cart" className="cart-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M9 2L7.5 5M17 2L18.5 5M5 5H19L18 19H6L5 5Z" stroke="currentColor" strokeWidth="2"/>
              </svg>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
