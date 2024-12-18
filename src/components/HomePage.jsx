// src/components/HomePage.js
import React from 'react';
import './HomePage.css'; // Import the CSS file
import About from './About'; // Import About section
import Portfolio from './Portfolio'; // Import Portfolio section
import Blog from './Blog'; // Import Blog section
import Contact from './Contact'; // Import Contact section

const HomePage = () => {
  
  const scrollToSection = (event) => {
    event.preventDefault(); // Prevent the default anchor link behavior

    // Get the target section id from the button's href attribute
    const targetId = event.target.getAttribute('href').slice(1); // Remove '#' from href

    // Find the target element by ID
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Scroll the target element into view with smooth scrolling
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Align the top of the target element with the top of the viewport
      });
    }
  };

  return (
    <div className="homepage-container">
      {/* Full Page Image */}
      <div className="background-image">
        {/* Overlay */}
        <div className="overlay">
          <h1>Daria ADA</h1>
        </div>
        
        {/* Buttons with anchor links */}
        <div className="button-container">
          <a href="#about" className="btn btn-about" onClick={scrollToSection}>About the Artist</a>
          <a href="#portfolio" className="btn btn-portfolio" onClick={scrollToSection}>Portfolio</a>
          <a href="#blog" className="btn btn-blog" onClick={scrollToSection}>Blog</a>
          <a href="#contact" className="btn btn-contact" onClick={scrollToSection}>Contact</a>
        </div>
      </div>

      {/* Sections */}
      <About />
      <Portfolio />
      <Blog />
      <Contact />
    </div>
  );
};

export default HomePage;
