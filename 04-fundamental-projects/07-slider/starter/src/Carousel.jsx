import React, { useEffect, useRef, useState } from 'react';
import { list } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [count, setCount] = useState(0);
  const sliderRef = useRef(null);
  const sliderIdRef = useRef(null); // 👈 儲存 interval id，方便後續清除

  const prevSlide = () => {
    setCount((prev) => (prev - 1 + people.length) % people.length);
  };

  const nextSlide = () => {
    setCount((prev) => (prev + 1) % people.length);
  };

  useEffect(() => {
    const startSlider = () => {
      sliderIdRef.current = setInterval(() => {
        setCount((prev) => (prev + 1) % people.length);
      }, 2000);
    };

    const pauseSlider = () => {
      clearInterval(sliderIdRef.current);
    };

    const resumeSlider = () => {
      startSlider();
    };

    startSlider();

    const sliderEl = sliderRef.current;
    sliderEl.addEventListener('mouseenter', pauseSlider);
    sliderEl.addEventListener('mouseleave', resumeSlider);

    // ✅ 清除 interval 和事件監聽
    return () => {
      clearInterval(sliderIdRef.current);
      sliderEl.removeEventListener('mouseenter', pauseSlider);
      sliderEl.removeEventListener('mouseleave', resumeSlider);
    };
  }, [people.length]);

  return (
    <section className="slider-container" ref={sliderRef}>
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide"
            key={id}
            style={{
              transform: `translateX(${100 * (personIndex - count)}%)`,
              opacity: personIndex === count ? 1 : 0,
              visibility: personIndex === count ? 'visible' : 'hidden',
            }}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
