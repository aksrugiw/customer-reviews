import React from 'react';
import './ProgressBar.css';

function ProgressBar({ point, pointStats }) {
  return (
    <div className="ProgressBar">
      <span className="ProgressBar-label">{point} star</span>
      <div className="ProgressBar-bg">
        <div className="ProgressBar-fill" style={{ width: pointStats + '%' }}></div>
      </div>
      <div className="ProgressBar-percent">{pointStats}%</div>
    </div>
  );
}

export default ProgressBar;
