import React, { useState } from 'react';
import '../App.css';
import Header from './Header';
import MainContent from './MainContent';
import JellyfishImage from './JellyfishImage';
import Carousel from './Carousel';
import Cart from './Cart';

const App = () => {
  const [showContent, setShowContent] = useState(true);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleHideContent = () => { setShowContent(false); };
  const handleOpenCart = () => { setShowCart(true); };
  const handleCloseCart = () => { setShowCart(false); };

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const handleRemoveItem = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <Header onOpenCart={handleOpenCart} />
      {showContent ? (
        <>
          <MainContent onHideContent={handleHideContent} />
          <JellyfishImage />
        </>
      ) : (
        <Carousel onAddToCart={handleAddToCart} />
      )}
      {showCart && <Cart cartItems={cart} onClose={handleCloseCart} onRemoveItem={handleRemoveItem} />}
    </div>
  );
};

export default App;
