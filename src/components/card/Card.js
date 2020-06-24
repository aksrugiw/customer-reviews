import './Card.css';
import React, { Component } from 'react';
import Star from '../star/Star';
import ProgressBar from '../progress-bar/ProgressBar';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <h3 className="Card-title">Customer Reviews</h3>
        <div className="Card-subheader">
          <div className="Card-review-stars">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <div className="Card-review-points">
            <span>4.7 out of 5</span>
          </div>
        </div>
        <div className="Card-ratings-count">
          <span>40 customer ratings</span>
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
}

export default Card;
