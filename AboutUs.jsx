import React from 'react';

function AboutUs() {
  return (
    <div className="about-us-container" style={styles.container}>
      <h1 style={styles.title}>About Paradise Nursery</h1>
      
      <p style={styles.paragraph}>
        Welcome to <strong>Paradise Nursery</strong>, your ultimate destination for beautiful, high-quality house plants. 
        Our mission is to bring a touch of nature into every home, creating environments that are both vibrant and deeply calming.
      </p>
      
      <p style={styles.paragraph}>
        Founded with a deep passion for greenery and sustainable living, we carefully curate a wide variety of plants—from 
        resilient, easy-to-care-for succulents to lush, exotic tropicals. We believe that plants do more than just decorate a room; 
        they purify the air, boost mood, and enhance overall well-being.
      </p>
      
      <p style={styles.paragraph}>
        Whether you are a seasoned plant parent or just beginning your green journey, our dedicated team is here to provide you 
        with the healthiest plants and expert care advice to ensure they thrive in your space. 
      </p>
      
      <p style={styles.conclusion}>
        Join us in our mission to make the world a greener, happier place—one plant at a time.
      </p>
    </div>
  );
}

// Basic inline styling for a clean presentation without needing a separate CSS file immediately
const styles = {
  container: {
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.6',
    color: '#333'
  },
  title: {
    color: '#2e7d32', // A pleasant green color
    marginBottom: '20px',
    fontSize: '2.5rem'
  },
  paragraph: {
    fontSize: '1.1rem',
    marginBottom: '15px',
    textAlign: 'justify'
  },
  conclusion: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    marginTop: '30px',
    color: '#1b5e20'
  }
};

export default AboutUs;
