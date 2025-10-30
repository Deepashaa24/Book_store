import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AIAssistant from './components/AIAssistant'
import Home from './pages/Home'
import Browse from './pages/Browse'
import Featured from './pages/Featured'
import Popular from './pages/Popular'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import Account from './pages/Account'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/book/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </main>
      <Footer />
      <AIAssistant />
    </div>
  )
}

export default App
