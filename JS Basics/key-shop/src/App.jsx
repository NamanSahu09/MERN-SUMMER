import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

return (
  <>
    <Header />

    <main>
      <h2>Welcome to My React App</h2>
      {/* <p>This app is created for demo on react app</p>
      <button onClick={handleClick}>Click Me</button> */}
    </main>

    <Footer />
  </>
);
}

export default App;
