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

  // Function to check if the promotion is active (between start and end date)
  const isPromotionActive = (startDate, endDate) => {
    const currentDate = new Date();
    const start = new Date(startDate);
    const end = new Date(endDate);
    return currentDate >= start && currentDate <= end;
  };

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
              <p>
                <strong>Start Date:</strong> {promo.startDate}
              </p>
              <p>
                <strong>End Date:</strong> {promo.endDate}
              </p>
              {/* Show sign-up button if the promotion is active */}
              <button
                disabled={!isPromotionActive(promo.startDate, promo.endDate)}
                className={`signup-btn ${!isPromotionActive(promo.startDate, promo.endDate) ? 'disabled' : ''}`}
              >
                {isPromotionActive(promo.startDate, promo.endDate) ? 'Sign Up' : 'Expired or Not Started'}
              </button>
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
