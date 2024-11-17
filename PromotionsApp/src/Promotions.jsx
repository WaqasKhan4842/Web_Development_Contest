import React, { useState } from "react";
import "./Promotions.css";
import promotionsData from "./promotionsData";

const Promotions = () => {
  const [carouselIndex, setCarouselIndex] = useState({
    movies: 0,
    events: 0,
    flights: 0,
  });

  const maxItemsPerView = 5;

  const handleNext = (category) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [category]: (prev[category] + 1) % Math.ceil(promotionsData[category].length / maxItemsPerView),
    }));
  };

  const handlePrev = (category) => {
    setCarouselIndex((prev) => ({
      ...prev,
      [category]:
        (prev[category] - 1 + Math.ceil(promotionsData[category].length / maxItemsPerView)) %
        Math.ceil(promotionsData[category].length / maxItemsPerView),
    }));
  };

  const renderRow = (category) => {
    const startIndex = carouselIndex[category] * maxItemsPerView;
    const visiblePromotions = promotionsData[category].slice(startIndex, startIndex + maxItemsPerView);

    return (
      <div className="carousel-row">
        <button className="arrow left" onClick={() => handlePrev(category)}>
          ◀
        </button>
        <div className="carousel">
          {visiblePromotions.map((promo) => (
            <div key={promo.id} className="promotion-card">
              <img src={promo.image} alt={promo.title} className="promotion-image" />
              <h3>{promo.title}</h3>
              <p>{promo.description}</p>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={() => handleNext(category)}>
          ▶
        </button>
      </div>
    );
  };

  return (
    <div className="promotions-container">
      <h1>Available Promotions</h1>
      <div className="promotions-section">
        <h2>Movie Promotions</h2>
        {renderRow("movies")}
      </div>
      <div className="promotions-section">
        <h2>Flight Promotions</h2>
        {renderRow("flights")}
      </div>
      <div className="promotions-section">
        <h2>Event Promotions</h2>
        {renderRow("events")}
      </div>
    </div>
  );
};

export default Promotions;
