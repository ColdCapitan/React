import React from 'react';

const Header = ({ onOpenCart }) => {
  const handleHomeClick = () => {
    window.location.reload();
  };

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

export default Header;
