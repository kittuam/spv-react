import Navbar from "../components/Navbar";
import logo from "../assets/spv.jpg";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";


function Home() {
return (
<>
<header className="top-header">
  <img
    src={logo}
    alt="SPV Logo"
    className="spv-logo"
  />

<div className="marquee-container">
  <div className="marquee-text">
    🔴 NEW • SPV Creative Photography Studio • Wedding Photography • Pre-Wedding Shoots • Candid Photography • Drone Shoots • Event Coverage • Fashion Shoots • Album Designing • Book Here 👉
    
    <span className="contact-number">
      9000708371
    </span>
  </div>
</div>
  <button className="buy-btn">
    BOOK NOW
  </button>
</header>
  {/* Navbar */}
  <Navbar />

  {/* Hero Section */}
  <section className="hero">
    <div className="overlay">
      <h2 className="photo-text">Photo</h2>

      <h1 className="hero-title">
        CREATIVE PHOTOGRAPHY THEME
      </h1>

      <p className="hero-subtitle">
        FOR PHOTOGRAPHERS & PHOTO ENTREPRENEURS
      </p>

      <button className="hero-btn">
        VIEW PORTFOLIO
      </button>
    </div>
  </section>

  {/* Welcome Section */}
<section className="home-content">
  <div className="container">

    <span className="section-tag">ABOUT US</span>

    <h2>Welcome to SPV Creative</h2>

    <p className="section-desc">
      We create stunning photography experiences that capture
      emotions, stories and unforgettable moments.
    </p>

    <div className="home-cards">

      <div className="card">
        <h3>Photography</h3>
        <p>
          Professional portfolio layouts with modern design.
        </p>
      </div>

      <div className="card">
        <h3> Creative Design</h3>
        <p>
          Beautiful UI and responsive website layouts.
        </p>
      </div>

      <div className="card">
        <h3>⭐ Premium Support⭐</h3>
        <p>
          Complete documentation and premium support.
        </p>
      </div>

    </div>

    <div className="stats">

      <div className="stat-box">
        <h3>500+</h3>
        <p>Projects</p>
      </div>

      <div className="stat-box">
        <h3>120+</h3>
        <p>Happy Clients</p>
      </div>

      <div className="stat-box">
        <h3>5+</h3>
        <p>Years Experience</p>
      </div>

      <div className="stat-box">
        <h3>1000+</h3>
        <p>Photos Delivered</p>
      </div>

    </div>

  </div>
</section>
{/* Photography Gallery */}

<section className="photo-wall-section" id="gallery">
  <h2>Our Photography</h2>

  <div className="photo-wall">

    <img
      src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4"
      alt=""
    />

    <img
      src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
      alt=""
    />

    <img
      src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
      alt=""
    />

    <img
      src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07"
      alt=""
    />

    <img
      src="https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0"
      alt=""
    />

    <img
      src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc"
      alt=""
    />

    <img
      src="https://images.unsplash.com/photo-1519741497674-611481863552"
      alt=""
    />

    <img
      src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
      alt=""
    />

    <img
      src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8"
      alt=""
    />

    <img
      src="https://images.unsplash.com/photo-1513278974582-3e1b4a4fa21f"
      alt=""
    />

    <img
      src="https://images.unsplash.com/photo-1529636798458-92182e662485"
      alt=""
    />

    <img
      src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
      alt=""
    />

  </div>
</section>
  {/* About */}
  <section className="about">
    <h2>About SPV Creative</h2>

    <p>
      We specialize in wedding photography, portrait sessions,
      creative shoots, fashion photography and event coverage.
      Our goal is to capture unforgettable moments with artistic perfection.
    </p>

    <button className="about-btn">
      Learn More
    </button>
  </section>

  {/* Services */}
  <section className="services">
    <h2>Our Services</h2>

    <div className="services-grid">
      <div className="service-card">
        <h3>Wedding Photography</h3>
        <p>
          Capturing every special moment of your wedding day.
        </p>
      </div>

      <div className="service-card">
        <h3>Pre Wedding Shoots</h3>
        <p>
          Creative and cinematic storytelling before marriage.
        </p>
      </div>

      <div className="service-card">
        <h3>Event Coverage</h3>
        <p>
          Professional photography for all events and functions.
        </p>
      </div>
    </div>
  </section>

  {/* Testimonials */}
  <section className="testimonials">
    <h2>Client Reviews</h2>

    <div className="testimonial-card">
      <p>
        "SPV Creative captured our wedding beautifully.
        Every picture tells a story."
      </p>

      <h4>- Happy Client</h4>
    </div>
  </section>

  {/* Contact */}
<section className="contact">
  <h2>Contact Us</h2>

  <p>Email: spvcreative@gmail.com</p>
  <p>Phone: +91 9000708371</p>

  <div className="contact-buttons">
    <a href="tel:+919000708371" className="contact-btn">
      📞 Call Now
    </a>

    <a href="mailto:spvcreative@gmail.com" className="contact-btn">
      📧 Email Us
    </a>
  </div>
</section>
  {/* Footer */}
<footer className="footer">

  <div className="footer-logo">
    SPV Creative
  </div>

  <div className="social-icons">

    <a
      href="https://instagram.com"
      target="_blank"
      rel="noreferrer"
      className="social-icon"
    >
      <FaInstagram />
    </a>

    <a
      href="https://facebook.com"
      target="_blank"
      rel="noreferrer"
      className="social-icon"
    >
      <FaFacebookF />
    </a>

    <a
      href="https://wa.me/919000708371"
      target="_blank"
      rel="noreferrer"
      className="social-icon"
    >
      <FaWhatsapp />
    </a>

  </div>

  <p>
    © 2026 SPV Creative. All Rights Reserved.
  </p>

</footer></>


);
}

export default Home;
