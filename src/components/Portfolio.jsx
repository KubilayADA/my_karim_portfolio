import React from 'react';
import './Portfolio.css'; // Import the CSS file for this component

const Portfolio = () => {
  return (
    <section id="portfolio" className="section portfolio">
      
      <h2>.</h2>
      <p>This hand-knitted masterpiece draws inspiration from the organic beauty of oysters. Designed by Daria Ada at HTW Berlin, the piece reflects a delicate balance of nature and craftsmanship. Each stitch is meticulously created by hand, while over 70 Swarovski stones shimmer like scattered pearls, adding depth and elegance. A tribute to the ocean’s textures and iridescence, this design celebrates timeless artistry and modern sophistication.</p>
     
      <div className="portfolio-images">
        <div className="design-1-container">
          <img src={require('../assets/design-1.png')} alt="Design 1" className="design-1" />
        </div>
        <div className="design-2-container">
          <img src={require('../assets/design-2.png')} alt="Design 2" className="design-2" />
        </div>
        <div className="design-3-container">
          <img src={require('../assets/design-3.png')} alt="Design 3" className="design-3" />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
