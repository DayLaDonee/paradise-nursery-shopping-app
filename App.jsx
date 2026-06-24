import React, { useState } from 'react';
import './App.css'; // Importing the CSS from Question 3

function App() {
  // State to manage whether the user is on the landing page or the shop page
  const [showShop, setShowShop] = useState(false);

  // Function to handle the transition from landing page to the shop
  const handleGetStarted = () => {
    setShowShop(true);
  };

  return (
    <div className="app-container">
      {!showShop ? (
        /* Landing Page Section */
        <div className="landing-page-container">
          <div className="landing-content">
            <h1 className="landing-title">Paradise Nursery</h1>
            <p className="landing-subtitle">
              Bring the calming essence of nature into your home with our wide selection of beautiful, high-quality houseplants.
            </p>
            <button 
              className="get-started-button" 
              onClick={handleGetStarted}
              style={styles.getStartedBtn}
            >
              Get Started
            </button>
          </div>
        </div>
      ) : (
        /* Shop Section - Placeholder for future tasks */
        <div className="shop-container">
          {/* In Task 6, you will render <ProductList /> here */}
          <h2 style={{ textAlign: 'center', marginTop: '50px' }}>
            Welcome to the Paradise Nursery Shop! (Product List rendering here)
          </h2>
        </div>
      )}
    </div>
  );
}

// Inline styles for the button to make it look professional
const styles = {
  getStartedBtn: {
    padding: '15px 40px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#2e7d32', // Leaf green color
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
  }
};

export default App;
