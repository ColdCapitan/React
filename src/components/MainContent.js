import React from 'react';

const MainContent = ({ onHideContent }) => {
  return (
    <div className="main-content">
      <h1>AquaHome</h1>
      <p>Наш магазин пропонує широкий вибір рибок для домашніх акваріумів, забезпечуючи якісних та здорових мешканців для вашого підводного світу</p>
      <button className="learn-more" onClick={onHideContent}>Переглянути асортимент</button>
    </div>
  );
};

export default MainContent;
