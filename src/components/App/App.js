import React from 'react';
import './App.css';
import Card from '../Card/Card';

const reviews = [4, 5, 5, 5, 3, 2, 3, 2, 3, 3, 4, 5, 5, 5, 3, 2, 3, 2, 3, 3];

function App() {
  return (
    <div className="App">
      <header className="App-main">
        <Card reviews={reviews} />
      </header>
    </div>
  );
}

export default App;
