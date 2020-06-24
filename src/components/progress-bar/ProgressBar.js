import './ProgressBar.css';
import React from 'react';

export default function ProgressBar() {
  return (
    <div className="ProgressBar">
      <span className="ProgressBar-label">5 star</span>
      <div className="ProgressBar-bg">
        <div className="ProgressBar-fill"></div>
      </div>
      <div className="ProgressBar-percent">84%</div>
    </div>
  );
}
