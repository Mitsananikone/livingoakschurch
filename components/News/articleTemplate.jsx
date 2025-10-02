import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./articleTemplate.module.css";

const ArticleTemplate = ({ 
  date, 
  paragraph, 
  bannerText, 
  bannerImage, 
  carouselImages 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);
  };

  return (
    <div className={styles.article}>
      <div className={styles.articleDate}>{date}</div>

      {/* Banner */}
      <div className={styles.banner}>
        <img src={bannerImage} alt={bannerText} className={styles.bannerImage} />
        <div className={styles.bannerText}>{bannerText}</div>
      </div>

      {/* Article Content */}
      <div className={styles.articleContent}>
        <br/>
        <p>{paragraph}</p>
              <br/>
      </div>

      {/* Carousel */}
      <div className={styles.carouselContainer}>
        <Slider {...carouselSettings} ref={sliderRef} initialSlide={currentSlide}>
          {carouselImages.map((image, index) => (
            <div key={index} className={styles.carouselImageWrapper}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      {/* Thumbnails */}
      <div className={styles.thumbnailContainer}>
        {carouselImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className={`${styles.thumbnail} ${index === currentSlide ? styles.activeThumbnail : ""}`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default ArticleTemplate;
