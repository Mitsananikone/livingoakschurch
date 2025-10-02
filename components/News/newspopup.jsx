import React from "react";
import styles from "./newspopup.module.css";


const NewsPopup = ({ article: Article }) => {
  return (
    <div className={styles.popupContent}>
      

      {/* Render the passed-in article component */}
      {Article && <Article />}
    </div>
  );
};

export default NewsPopup;
