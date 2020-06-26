import React from 'react';
import ProgressBar from '../ProgressBar/ProgressBar';
import StarBar from '../StarBar/StarBar';

import './Card.css';

function Card({ reviews }) {
  const points = getReviewPoints(reviews);
  return (
    <div className="Card">
      <h3 className="Card-title">Customer Reviews</h3>
      <div className="Card-subheader">
        <div className="Card-review-stars">
          <StarBar points={points} />
        </div>
        <div className="Card-review-points">
          <span>{points} out of 5</span>
        </div>
      </div>
      <div className="Card-ratings-count">
        <span>{reviews.length} customer ratings</span>
      </div>
      <section className="Card-sum-up">
        {renderProgressBars(reviews)}
        <footer className="Card-footer">
          <a href="#">How do we calculate ratings?</a>
        </footer>
      </section>
    </div>
  );
}

const getReviewPoints = (reviews) => {
  const sum = reviews.reduce((acc, curr) => acc + curr);
  const num = sum / reviews.length;
  return Math.round(num * 100) / 100;
};

const countReviewPoints = (reviews) => {
  let points = {};

  for (let index = 1; index < 6; index++) {
    points[index] = reviews.filter((elem) => elem === index);
  }
  return points;
};

const renderProgressBars = (reviews) => {
  const ratings = [5, 4, 3, 2, 1];
  const progressBars = [];
  for (let index = 0; index < ratings.length; index++) {
    let point = ratings[index];
    progressBars.push(<ProgressBar key={'point-' + index} point={point} pointStats={getPointStats(reviews, point)} />);
  }
  return progressBars;
};

const getPointStats = (reviews, point) => {
  const pointArray = countReviewPoints(reviews)[point];
  return Math.ceil(100 * (pointArray.length / reviews.length));
};

export default Card;
