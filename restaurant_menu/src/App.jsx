import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Intro from './intro.jsx';
import ColdDrinks from './ColdDrinks.jsx';
import Milkshakes from './Milkshakes.jsx';
import Tea from './Tea.jsx';
import Dashboard from './Dashboard.jsx';
import Login from './Login.jsx'
import SendItems from './sendItems.jsx';

const Home = () => <div className="page"><h1>Home Page</h1><p>Welcome to our website!</p></div>;
const About = () => <div className="page"><h1>About Us</h1><p>Learn more about our company.</p></div>;
const Services = () => <div className="page"><h1>Our Services</h1><p>Discover what we offer.</p></div>;
const Contact = () => <div className="page"><h1>Contact Us</h1><p>Get in touch with our team.</p></div>;
const Products = () => <div className="page"><h1>Products</h1><p>Explore our product catalog.</p></div>;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="app">
          {/* Navigation Menu - Fixed duplicate links */}
          <nav className="navbar">
            <ul className="nav-menu">
              <Link to="/Tea" className="header">
                <div>
                  <span className="nav-text">چای و دمنوش</span>
                  <span className="nav-english">Hot Drinks</span>
                </div>
              </Link>
              <Link to="/Milkshakes" className="header">
                <div>
                  <span className="nav-text">شیک</span>
                  <span className="nav-english">MilkShakes</span>
                </div>
              </Link>
              <Link to="/ColdDrinks" className="header">
                <div>
                  <span className="nav-text">نوشیدن سرد</span>
                  <span className="nav-english">Cold Drinks</span>
                </div>
              </Link>
              <Link to="/intro" className="header">
                <div>
                  <span className="nav-text">نوشیدن گرم</span>
                  <span className="nav-english">Hot Drinks</span>
                </div>
              </Link>
            </ul>
          </nav>

          {/* Page Content */}
          <main className="main-content">
            <Routes>
              <Route path="/Tea" element={<Tea />} />
              <Route path="/Milkshakes" element={<Milkshakes />} />
              <Route path="/ColdDrinks" element={<ColdDrinks />} />
              <Route path="/intro" element={<Intro />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/sendItems" element={<SendItems />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;