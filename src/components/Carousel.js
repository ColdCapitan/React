import React, { useState } from 'react';

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

export default Carousel;
