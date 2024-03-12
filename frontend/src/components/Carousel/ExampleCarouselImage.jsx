import React from 'react';

const ExampleCarouselImage = ({ title, text ,src }) => (
  <div className="d-block w-100">
    <img
      src={src} // Placeholder image URL, replace with actual image URL
      alt={`${title}: ${text}`}
      className="bd-placeholder-img bd-placeholder-img-lg"
      width="1530"
      height="725"
    />
    <div className="carousel-caption">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  </div>
);

ExampleCarouselImage.displayName = 'ExampleCarouselImage';

export default ExampleCarouselImage;
