import React from 'react';
import ProgressBar from '../progress-bar/ProgressBar';
import StarBar from '../star-bar/StarBar';

import './Card.css';

function Card({ reviews }) {
  const points = getReviewPoints(reviews);
  return (
    <div className="Card">
      <h3 className="Card-title">Customer Reviews</h3>
      <div className="Card-subheader">
        <div className="Card-review-stars">
          <StarBar points={Math.floor(points)} />
        </div>
        <div className="Card-review-points">
          <span>{points} out of 5</span>
        </div>
      </div>
      <div className="Card-ratings-count">
        <span>{reviews.length} customer ratings</span>
      </div>
      <section className="Card-sum-up">
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
        <ProgressBar />
        <footer className="Card-footer">
          <a href="#">How do we calculate ratings?</a>
        </footer>
      </section>
    </div>
  );
}

const getReviewPoints = (reviews) => {
  const sum = reviews.reduce((acc, curr) => acc + curr);
  return sum / reviews.length;
};

export default Card;
