import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Calculate total amount for all products in the cart
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.cost * item.quantity;
    });
    return total;
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    if (onContinueShopping) {
      onContinueShopping(e);
    }
  };

  const handleCheckoutShopping = (e) => {
    alert('Checkout functionality is Coming Soon!');
  };

  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      // If quantity is 1 and user clicks '-', remove the item completely
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = (item) => {
    return item.cost * item.quantity;
  };

  return (
    <div style={styles.cartContainer}>
      <h2 style={styles.totalAmount}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      
      <div style={styles.itemsContainer}>
        {cart.map(item => (
          <div style={styles.cartItem} key={item.name}>
            <img src={item.image} alt={item.name} style={styles.itemImage} />
            
            <div style={styles.itemDetails}>
              <div style={styles.itemName}>{item.name}</div>
              <div style={styles.itemCost}>Unit Price: ${item.cost}</div>
              
              <div style={styles.quantityContainer}>
                <button style={styles.qtyButton} onClick={() => handleDecrement(item)}>-</button>
                <span style={styles.qtyValue}>{item.quantity}</span>
                <button style={styles.qtyButton} onClick={() => handleIncrement(item)}>+</button>
              </div>
              
              <div style={styles.itemTotal}>Subtotal: ${calculateTotalCost(item)}</div>
              
              <button style={styles.deleteButton} onClick={() => handleRemove(item)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {cart.length === 0 && (
        <p style={{ textAlign: 'center', fontSize: '1.2rem', marginTop: '20px' }}>
          Your cart is empty. Add some plants!
        </p>
      )}

      <div style={styles.actionButtonsContainer}>
        <button style={styles.continueButton} onClick={(e) => handleContinueShopping(e)}>
          Continue Shopping
        </button>
        <button style={styles.checkoutButton} onClick={(e) => handleCheckoutShopping(e)}>
          Checkout
        </button>
      </div>
    </div>
  );
};

// Inline styles to ensure beautiful rendering without needing a separate CSS file
const styles = {
  cartContainer: { padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial, sans-serif' },
  totalAmount: { textAlign: 'center', color: '#2e7d32', marginBottom: '30px', fontSize: '2rem' },
  itemsContainer: { display: 'flex', flexDirection: 'column', gap: '20px' },
  cartItem: { 
    display: 'flex', alignItems: 'center', padding: '15px', 
    border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' 
  },
  itemImage: { width: '120px', height: '120px', objectFit: 'cover', borderRadius: '8px', marginRight: '20px' },
  itemDetails: { flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' },
  itemName: { fontSize: '1.3rem', fontWeight: 'bold', color: '#333' },
  itemCost: { fontSize: '1rem', color: '#666' },
  quantityContainer: { display: 'flex', alignItems: 'center', gap: '10px', marginTop: '5px' },
  qtyButton: { 
    padding: '5px 12px', fontSize: '1.2rem', cursor: 'pointer', 
    backgroundColor: '#eee', border: '1px solid #ccc', borderRadius: '4px' 
  },
  qtyValue: { fontSize: '1.2rem', fontWeight: 'bold', minWidth: '30px', textAlign: 'center' },
  itemTotal: { fontSize: '1.1rem', fontWeight: 'bold', color: '#1b5e20', marginTop: '5px' },
  deleteButton: { 
    alignSelf: 'flex-start', marginTop: '10px', padding: '8px 15px', 
    backgroundColor: '#d32f2f', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' 
  },
  actionButtonsContainer: { display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px' },
  continueButton: { 
    padding: '12px 24px', fontSize: '1.1rem', backgroundColor: '#2e7d32', 
    color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' 
  },
  checkoutButton: { 
    padding: '12px 24px', fontSize: '1.1rem', backgroundColor: '#f57c00', 
    color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' 
  }
};

export default CartItem;
