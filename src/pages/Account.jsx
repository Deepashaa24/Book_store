import { useState } from 'react'
import './Account.css'

export default function Account() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert(isSignUp ? 'Account created!' : 'Logged in!')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="account-page">
      <div className="container">
        <div className="account-wrapper">
          <div className="account-image">
            <img 
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=800&auto=format&fit=crop&q=60" 
              alt="Books"
            />
          </div>

          <div className="account-form-section">
            <h1>{isSignUp ? 'Create Account' : 'Welcome Back'}</h1>
            <p className="account-subtitle">
              {isSignUp 
                ? 'Join our community of book lovers' 
                : 'Sign in to access your library'}
            </p>

            <form onSubmit={handleSubmit} className="account-form">
              {isSignUp && (
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required={isSignUp}
                    placeholder="John Doe"
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                />
              </div>

              {!isSignUp && (
                <div className="form-options">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="forgot-link">Forgot password?</a>
                </div>
              )}

              <button type="submit" className="btn btn-primary btn-block">
                {isSignUp ? 'Create Account' : 'Sign In'}
              </button>
            </form>

            <div className="account-toggle">
              <p>
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                <button onClick={() => setIsSignUp(!isSignUp)} className="toggle-btn">
                  {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
              </p>
            </div>

            <div className="social-login">
              <p className="divider"><span>Or continue with</span></p>
              <div className="social-buttons">
                <button className="social-btn">
                  <span>🔍</span> Google
                </button>
                <button className="social-btn">
                  <span>📘</span> Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
