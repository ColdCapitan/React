import React, { useState } from 'react';
import './App.css'; 

const Header = ({ onOpenCart }) => {const handleHomeClick = () => {window.location.reload();};
  return (
    <header className="header">
      <div className="logo">AQUAHOME</div>
      <nav className="NavBar">
        <a className="nav-links" href="#home" onClick={handleHomeClick}>Головна</a>
        <a className="nav-links" href="#info" onClick={onOpenCart}>Кошик</a> 
      </nav>
    </header>
  );
};

const MainContent = ({ onHideContent }) => {
  return (
    <div className="main-content">
      <h1>AquaHome</h1>
      <p>Наш магазин пропонує широкий вибір рибок для домашніх акваріумів, забезпечуючи якісних та здорових мешканців для вашого підводного світу</p>
      <button className="learn-more" onClick={onHideContent}>Переглянути асортимент</button>
    </div>
  );
};

const JellyfishImage = () => {
  return (
    <div className="jellyfish-circle">
      <img src="/photo/Jelly.png" alt="Jellyfish" className="jellyfish-image" />
    </div>
  );
};

const Carousel = ({ onAddToCart }) => {  
  const items = [
    {
      name: 'Скалярія',
      image: '/photo/fish1.png',
      description: 'Це живі прикраси вашого акваріума: їхні яскраві кольори та елегантні форми додадуть розкоші і динаміки вашому підводному світу',
      price: '100 грн',
    },
    {
      name: 'Даніо',
      image: '/photo/fish2.png',
      description: 'Відомий своєю активністю, соціальністю та здатністю прикрашати будь-який акваріум своїми незабутніми кольорами та грайливим поведінкою',
      price: '120 грн',
    },
    {
      name: 'Молінезія',
      image: '/photo/fish3.png',
      description: 'Відома своєю привабливою палітрою кольорів і спокійним характером, що робить її ідеальним вибором для акваріумів будь-якого рівня досвіду',
      price: '110 грн',
    },
    {
      name: 'Гупі',
      image: '/photo/fish4.jpg',
      description: 'Елегантна рибка з витонченими плавниками вражає своєю грацією та є ідеальним компаньйоном для інших видів',
      price: '130 грн',
    },
    {
      name: 'Астронотус',
      image: '/photo/fish5.png',
      description: 'Яскравий і витривалий рибоподібний вид, відомий своєю вражаючою забарвленням та дружелюбним характером, що робить його ідеальним для акваріумів будь-якого рівня',
      price: '140 грн',
    },
    {
      name: 'Риба-клоун',
      image: '/photo/fish6.png',
      description: 'Яскравий і харизматичний мешканець коралових рифів, відомий своєю барвистою зовнішністю та симбіотичними відносинами з анемонами, що робить її ідеальним вибором для акваріумістів',
      price: '150 грн',
    },
    {
      name: 'Меченосець',
      image: '/photo/fish7.jpg',
      description: 'Яскравий акваріумний рибок, відомий своїми яскравими кольорами та витонченим формою хвоста, який робить його ідеальним вибором для будь-якого акваріума',
      price: '160 грн',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel">
      <h2>Асортимент</h2>
      <div className="carousel-item">
        <img src={items[currentIndex].image} alt={items[currentIndex].name} style={{ width: '20%', borderRadius: '100px' }} />
        <h3>{items[currentIndex].name}</h3>
        <p>{items[currentIndex].description}</p>
        <p>{items[currentIndex].price}</p>
        <button className="learn-more" onClick={() => onAddToCart(items[currentIndex])}>Замовити</button>
      </div>
      <div className="carousel-controls">
        <button onClick={prevItem} className="carousel-button">←</button>
        <button onClick={nextItem} className="carousel-button">→</button>
      </div>
    </div>
  );
};

const Cart = ({ cartItems, onClose, onRemoveItem }) => {
  return (
    <div className="cart">
      <h2>Кошик</h2>
      <button className="close-button" onClick={onClose}>Закрити</button>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Ваш кошик порожній</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <div className="item-info">
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
              <button className="remove-button" onClick={() => onRemoveItem(index)}>
                Видалити
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const App = () => {
  const [showContent, setShowContent] = useState(true);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleHideContent = () => {setShowContent(false);};
  const handleOpenCart = () => {setShowCart(true);};
  const handleCloseCart = () => {setShowCart(false);};

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
