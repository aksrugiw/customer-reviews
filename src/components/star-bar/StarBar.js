import React from 'react';
import Star from '../star/Star';

import './StarBar.css';

function StarBar({ points }) {
  return (
    <div className="StarBar">
      <div className="StarBar-bg">{renderStars(5, '#cbd4e8')}</div>
      <div className="StarBar-filled">{renderStars(points, '#ffcc48')}</div>
    </div>
  );
}

function renderStars(count, colorFill) {
  let stars = [];
  while (count > 0) {
    stars.push(<Star key={'start-' + count} colorFill={colorFill} />);
    count--;
  }
  return stars;
}

export default StarBar;
