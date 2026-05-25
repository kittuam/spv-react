import React from 'react'
import logo from './assets/spv.jpg'

function App() {
  return (
    <>
      <div className="top-bar d-flex justify-content-between align-items-center">
        <div className="logo-wrap">
          <img src={logo} alt="SPV Logo" className="spv-logo" />
        </div>
        <a href="#" className="buy-btn">Buy Now</a>
      </div>

      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="menu">
            <ul className="navbar-nav align-items-center">
              <li className="nav-item"><a className="nav-link" href="#">H</a></li>
              <li className="nav-item"><a className="nav-link" href="#">PORTFOLIO STYLES</a></li>
              <li className="nav-item"><a className="nav-link" href="#">TUTORIALS</a></li>
              <li className="nav-item"><a className="nav-link" href="#">DOCUMENTATION</a></li>
              <li className="nav-item"><a className="nav-link" href="#">SUPPORT</a></li>
            </ul>
          </div>

          <a href="#" className="gold-btn">GET PHOTOLUV</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Photo</h1>
          <h2>CREATIVE PHOTOGRAPHY THEME</h2>
          <p>FOR PHOTOGRAPHERS & PHOTO ENTREPRENEURS</p>
        </div>
      </section>
    </>
  )
}

export default App