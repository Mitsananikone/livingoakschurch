import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./articleWIthVideos.module.css";

const ArticleWithVideos = ({
  date,
  bannerText,
  bannerImage,
  paragraph1,
  video1,
  video1Title,
  paragraph2,
  video2,
  video2Title,
  paragraph3,
  paragraph4,
  carouselImages,
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
        <img
          src={bannerImage}
          alt={bannerText}
          className={styles.bannerImage}
        />
        <div className={styles.bannerText}>{bannerText}</div>
      </div>

      {/* Paragraph 1 */}
      <p className={styles.paragraph}>{paragraph1}</p>

      {/* Video 1 */}
      <div className={styles.videoWrapper}>
        <video controls>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h3 className={styles.videoTitle}>{video1Title}</h3>
      </div>

      {/* Paragraph 2 */}
      <p className={`${styles.paragraph} ${styles.paragraph2}`}>{paragraph2}</p>

      {/* Video 2 */}
      <div className={styles.videoWrapper}>
        <video controls>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h3 className={styles.videoTitle}>{video2Title}</h3>
      </div>

      {/* Paragraph 3 */}
      <p className={`${styles.paragraph} ${styles.paragraph3}`}>{paragraph3}</p>

      {/* Paragraph 4 */}
      <p className={`${styles.paragraph} ${styles.paragraph4}`}>{paragraph4}</p>

      {/* Carousel */}
      <div className={styles.carouselContainer}>
        <Slider
          {...carouselSettings}
          ref={sliderRef}
          initialSlide={currentSlide}
        >
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
            className={`${styles.thumbnail} ${
              index === currentSlide ? styles.activeThumbnail : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default ArticleWithVideos;
