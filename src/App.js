import React from 'react'; // Correct capitalization for React import
import ReactDOM from 'react-dom'; // Correct capitalization for ReactDOM import
import Portfolio from './portfolio'; // Ensure the file path is correct (case-sensitive on some systems)

function App() {
  return (
    <div className="App">
      {/* Rendering the Portfolio component */}
      <Portfolio />
    </div>
  );
}

export default App;
