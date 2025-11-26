import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './intro.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NewPost from './NewPost.jsx'

const Home = () => <div className="page"><h1>Home Page</h1><p>Welcome to our website!</p></div>;
const About = () => <div className="page"><h1>About Us</h1><p>Learn more about our company.</p></div>;
const Services = () => <div className="page"><h1>Our Services</h1><p>Discover what we offer.</p></div>;
const Contact = () => <div className="page"><h1>Contact Us</h1><p>Get in touch with our team.</p></div>;
const Products = () => <div className="page"><h1>Products</h1><p>Explore our product catalog.</p></div>;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div className="app">
          {/* Navigation Menu */}
          <nav className="navbar">
            <ul className="nav-menu">
              <Link to="/" className="header'>Home</Link>
              <Link to="/About" className="header">Intro</Link>
              <Link to="/services" className="header">Services</Link>
              <Link to="/products" className="header">Products</Link>
              <Link to="/contact" className="header">Contact</Link>
              <Link to="/Intro" className="header">Intro</Link>
            </ul>
          </nav>

          {/* Page Content */}
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/Intro" element={<Intro />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  )
}

export default App
