import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { books } from '../data/books'
import './AIAssistant.css'

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: '👋 Hi! I\'m your AI book assistant. Ask me anything like:\n• "Suggest fiction books"\n• "Books under $15"\n• "Best rated books"\n• "Books by Maya Bennett"'
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getAIResponse = (userInput) => {
    const input = userInput.toLowerCase()

    // Pattern matching for different types of queries
    
    // 1. Genre/Category search
    if (input.includes('fiction') || input.includes('story') || input.includes('novel')) {
      const fictionBooks = books.filter(b => b.category.toLowerCase().includes('fiction'))
      if (fictionBooks.length > 0) {
        return {
          text: '📚 Here are some great fiction books:',
          books: fictionBooks.slice(0, 3)
        }
      }
    }

    if (input.includes('poetry') || input.includes('poem')) {
      const poetryBooks = books.filter(b => b.category.toLowerCase().includes('poetry'))
      if (poetryBooks.length > 0) {
        return {
          text: '✨ Poetry recommendations for you:',
          books: poetryBooks
        }
      }
    }

    if (input.includes('non-fiction') || input.includes('nonfiction') || input.includes('factual')) {
      const nonFictionBooks = books.filter(b => b.category.toLowerCase().includes('non-fiction'))
      if (nonFictionBooks.length > 0) {
        return {
          text: '📖 Non-fiction books you might like:',
          books: nonFictionBooks
        }
      }
    }

    if (input.includes('photography') || input.includes('photo') || input.includes('visual')) {
      const photoBooks = books.filter(b => b.category.toLowerCase().includes('photography'))
      if (photoBooks.length > 0) {
        return {
          text: '📷 Beautiful photography books:',
          books: photoBooks
        }
      }
    }

    // 2. Price-based queries
    if (input.includes('cheap') || input.includes('under') || input.includes('less than') || input.includes('budget')) {
      const priceMatch = input.match(/\$?(\d+)/)
      const maxPrice = priceMatch ? parseInt(priceMatch[1]) : 15
      const affordableBooks = books.filter(b => b.price <= maxPrice).slice(0, 3)
      if (affordableBooks.length > 0) {
        return {
          text: `💰 Books under $${maxPrice}:`,
          books: affordableBooks
        }
      }
    }

    if (input.includes('expensive') || input.includes('premium') || input.includes('over')) {
      const expensiveBooks = books.filter(b => b.price > 20).slice(0, 3)
      if (expensiveBooks.length > 0) {
        return {
          text: '💎 Premium books:',
          books: expensiveBooks
        }
      }
    }

    // 3. Rating-based queries
    if (input.includes('best') || input.includes('top rated') || input.includes('highest') || input.includes('popular')) {
      const topBooks = [...books].sort((a, b) => b.rating - a.rating).slice(0, 3)
      return {
        text: '⭐ Our top-rated books:',
        books: topBooks
      }
    }

    // 4. Author search
    const authorMatch = input.match(/by\s+([a-z\s.]+)/i)
    if (authorMatch || input.includes('author') || input.includes('written')) {
      const searchTerm = authorMatch ? authorMatch[1] : input
      const authorBooks = books.filter(b => 
        b.author.toLowerCase().includes(searchTerm) ||
        searchTerm.includes(b.author.toLowerCase().split(' ')[0])
      )
      if (authorBooks.length > 0) {
        return {
          text: `✍️ Books by ${authorBooks[0].author}:`,
          books: authorBooks
        }
      }
    }

    // 5. Specific title search
    const titleBooks = books.filter(b => 
      b.title.toLowerCase().includes(input) || 
      input.includes(b.title.toLowerCase())
    )
    if (titleBooks.length > 0) {
      return {
        text: '📕 I found this book:',
        books: titleBooks.slice(0, 1)
      }
    }

    // 6. Recommendation queries
    if (input.includes('recommend') || input.includes('suggest') || input.includes('what should')) {
      const randomBooks = [...books].sort(() => 0.5 - Math.random()).slice(0, 3)
      return {
        text: '🎯 Based on our collection, I recommend:',
        books: randomBooks
      }
    }

    // 7. New/Latest books
    if (input.includes('new') || input.includes('latest') || input.includes('recent')) {
      return {
        text: '🆕 Our latest additions:',
        books: books.slice(0, 3)
      }
    }

    // 8. Category list query
    if (input.includes('category') || input.includes('categories') || input.includes('type')) {
      const categories = [...new Set(books.map(b => b.category))]
      return {
        text: `📂 We have books in these categories:\n${categories.map(c => `• ${c}`).join('\n')}\n\nJust ask me about any category!`,
        books: []
      }
    }

    // 9. Help queries
    if (input.includes('help') || input.includes('how') || input.includes('what can')) {
      return {
        text: `I can help you find books! Try asking:\n• "Show me fiction books"\n• "Books under $20"\n• "Best rated books"\n• "Books by [author name]"\n• "Recommend poetry"\n• "Latest books"\n\nWhat are you looking for?`,
        books: []
      }
    }

    // 10. Greeting
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return {
        text: '👋 Hello! I\'m here to help you find the perfect book. What kind of books are you interested in?',
        books: []
      }
    }

    // Default response with random suggestions
    return {
      text: '🤔 I\'m not sure about that, but here are some books you might enjoy:',
      books: [...books].sort(() => 0.5 - Math.random()).slice(0, 3)
    }
  }

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { type: 'user', text: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const response = getAIResponse(input)
      const botMessage = { type: 'bot', text: response.text, books: response.books }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 800)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="ai-assistant-container"
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{ type: 'spring', damping: 25 }}
          >
            <div className="ai-header">
              <div className="ai-header-info">
                <div className="ai-avatar">🤖</div>
                <div>
                  <h3>AI Book Assistant</h3>
                  <span className="ai-status">● Online</span>
                </div>
              </div>
              <button className="ai-close-btn" onClick={() => setIsOpen(false)}>✕</button>
            </div>

            <div className="ai-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`message ${msg.type}`}>
                  <div className="message-bubble">
                    <p style={{ whiteSpace: 'pre-line' }}>{msg.text}</p>
                    {msg.books && msg.books.length > 0 && (
                      <div className="suggested-books">
                        {msg.books.map(book => (
                          <a 
                            key={book.id} 
                            href={`/book/${book.id}`}
                            className="suggested-book-card"
                            onClick={(e) => {
                              e.preventDefault()
                              window.location.href = `/book/${book.id}`
                            }}
                          >
                            <img src={book.image} alt={book.title} />
                            <div className="suggested-book-info">
                              <h4>{book.title}</h4>
                              <p>{book.author}</p>
                              <div className="suggested-book-meta">
                                <span className="price">${book.price}</span>
                                <span className="rating">⭐ {book.rating}</span>
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="message bot">
                  <div className="message-bubble typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="ai-input-area">
              <input
                type="text"
                placeholder="Ask me about books..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button onClick={handleSend} className="send-btn">
                ➤
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="ai-toggle-btn"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? '✕' : '🤖'}
      </motion.button>
    </>
  )
}
