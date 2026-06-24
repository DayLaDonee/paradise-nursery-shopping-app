import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
// import CartItem from './CartItem'; // Uncomment this in Task 7 when you create the CartItem component

function ProductList() {
  const dispatch = useDispatch();
  
  // Access the cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.items);
  
  // Calculate total items in the cart dynamically for the Navbar badge
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // State to toggle between the Product List view and the Cart view
  const [showCart, setShowCart] = useState(false);

  // Array of 3 categories, each containing 6 unique houseplants as per requirements
  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", price: 15, image: "https://images.unsplash.com/photo-1593482892290-f54927eba188?auto=format&fit=crop&w=200&q=80" },
        { name: "Spider Plant", price: 12, image: "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?auto=format&fit=crop&w=200&q=80" },
        { name: "Peace Lily", price: 18, image: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97?auto=format&fit=crop&w=200&q=80" },
        { name: "Boston Fern", price: 14, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=200&q=80" },
        { name: "Rubber Plant", price: 20, image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=200&q=80" },
        { name: "Aloe Vera", price: 10, image: "https://images.unsplash.com/photo-1559105436-1e64ac36dbbd?auto=format&fit=crop&w=200&q=80" }
      ]
    },
    {
      category: "Succulents",
      plants: [
        { name: "Jade Plant", price: 10, image: "https://images.unsplash.com/photo-1508020963891-628d613e5187?auto=format&fit=crop&w=200&q=80" },
        { name: "Echeveria", price: 8, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=200&q=80" },
        { name: "Zebra Plant", price: 9, image: "https://images.unsplash.com/photo-1528475478569-c89b21f92e07?auto=format&fit=crop&w=200&q=80" },
        { name: "Burro's Tail", price: 11, image: "https://images.unsplash.com/photo-1601370690183-1c7796ecec61?auto=format&fit=crop&w=200&q=80" },
        { name: "String of Pearls", price: 15, image: "https://images.unsplash.com/photo-1512403754473-27835f7b9984?auto=format&fit=crop&w=200&q=80" },
        { name: "Panda Plant", price: 12, image: "https://images.unsplash.com/photo-1556942154-f06c148ec0ba?auto=format&fit=crop&w=200&q=80" }
      ]
    },
    {
      category: "Flowering Plants",
      plants: [
        { name: "Orchid", price: 25, image: "https://images.unsplash.com/photo-1510250682855-460d3fc82d6b?auto=format&fit=crop&w=200&q=80" },
        { name: "Anthurium", price: 20, image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=200&q=80" },
        { name: "African Violet", price: 15, image: "https://images.unsplash.com/photo-1533118933400-0e1cbcdb1dd3?auto=format&fit=crop&w=200&q=80" },
        { name: "Begonia", price: 12, image: "https://images.unsplash.com/photo-1508020963891-628d613e5187?auto=format&fit=crop&w=200&q=80" },
        { name: "Christmas Cactus", price: 18, image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=200&q=80" },
        { name: "Kalanchoe", price: 14, image: "https://images.unsplash.com/photo-1593482892290-f54927eba188?auto=format&fit=crop&w=200&q=80" }
      ]
    }
  ];

  // Function to dispatch the addItem action
  const handleAddToCart = (plant) => {
    dispatch(addItem({ name: plant.name, cost: plant.price, image: plant.image }));
  };

  return (
    <div style={styles.container}>
      {/* Navigation Bar */}
      <nav style={styles.navbar}>
        <div style={styles.logo}>
          <a href="/" style={styles.navLinkHome}>🌿 Paradise Nursery</a>
        </div>
        <div style={styles.navLinks}>
          <button onClick={() => setShowCart(false)} style={styles.navButton}>Plants</button>
          <button onClick={() => setShowCart(true)} style={styles.navButton}>
            Cart
            {/* Dynamic Cart Icon Count */}
            <span style={styles.cartIcon}>
              🛒 {totalItems > 0 && <span style={styles.badge}>{totalItems}</span>}
            </span>
          </button>
        </div>
      </nav>

      {/* Conditional Rendering: Product List OR Cart */}
      {!showCart ? (
        <div style={styles.productSection}>
          {plantsArray.map((category, index) => (
            <div key={index} style={styles.categoryContainer}>
              <h2 style={styles.categoryTitle}>{category.category}</h2>
              <div style={styles.grid}>
                {category.plants.map((plant, plantIndex) => {
                  // Check if this specific plant is already added to the cart
                  const isAdded = cartItems.some((item) => item.name === plant.name);

                  return (
                    <div key={plantIndex} style={styles.card}>
                      <img src={plant.image} alt={plant.name} style={styles.image} />
                      <h3 style={styles.plantName}>{plant.name}</h3>
                      <p style={styles.price}>${plant.price}</p>
                      <button
                        onClick={() => handleAddToCart(plant)}
                        disabled={isAdded}
                        style={{
                          ...styles.addButton,
                          backgroundColor: isAdded ? '#9e9e9e' : '#2e7d32',
                          cursor: isAdded ? 'not-allowed' : 'pointer'
                        }}
                      >
                        {isAdded ? 'Added' : 'Add to Cart'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={styles.cartSection}>
          <h2 style={{ textAlign: 'center', marginTop: '50px' }}>
            {/* <CartItem onContinueShopping={() => setShowCart(false)} /> */}
            Cart functionality will be rendered here (Task 7 Component)
          </h2>
        </div>
      )}
    </div>
  );
}

// Inline styling for layout and presentation
const styles = {
  container: { fontFamily: 'Arial, sans-serif' },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#2e7d32',
    padding: '15px 30px',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 1000
  },
  logo: { fontSize: '1.5rem', fontWeight: 'bold' },
  navLinkHome: { color: 'white', textDecoration: 'none' },
  navLinks: { display: 'flex', gap: '20px' },
  navButton: {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '1.1rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center'
  },
  cartIcon: { marginLeft: '8px', fontSize: '1.2rem', position: 'relative' },
  badge: {
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    padding: '2px 6px',
    fontSize: '0.8rem',
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    fontWeight: 'bold'
  },
  productSection: { padding: '20px' },
  categoryContainer: { marginBottom: '40px' },
  categoryTitle: { textAlign: 'center', marginBottom: '20px', fontSize: '2rem', color: '#333' },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px'
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '15px',
    width: '250px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  },
  image: { width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' },
  plantName: { margin: '15px 0 10px', fontSize: '1.2rem', fontWeight: 'bold' },
  price: { fontSize: '1.1rem', color: '#555', marginBottom: '15px' },
  addButton: {
    width: '100%',
    padding: '10px',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  cartSection: { padding: '20px' }
};

export default ProductList;
