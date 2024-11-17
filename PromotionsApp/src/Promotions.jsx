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
                            <div className="promotion-card-header">
                                <h3>{promo.title}</h3>
                            </div>
                            <p>{promo.description}</p>
                            <p>
                                <strong>Start Date:</strong> {promo.startDate}
                            </p>
                            <p>
                                <strong>End Date:</strong> {promo.endDate}
                            </p>
                            <button
                                disabled={!isPromotionActive(promo.startDate, promo.endDate)}
                                className={`subscribe-btn ${!isPromotionActive(promo.startDate, promo.endDate) ? 'disabled' : ''}`}
                            >
                                {isPromotionActive(promo.startDate, promo.endDate) ? 'Subscribe' : 'Expired or Not Started'}
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
            <h1 className="main-heading">Available Promotions</h1>
            <div className="promotions-section">
                <h2 className="section-heading">Movie Promotions</h2>
                {renderRow("movies")}
            </div>
            <div className="promotions-section">
                <h2 className="section-heading">Flight Promotions</h2>
                {renderRow("flights")}
            </div>
            <div className="promotions-section">
                <h2 className="section-heading">Event Promotions</h2>
                {renderRow("events")}
            </div>
        </div>
    );
};

export default Promotions;
