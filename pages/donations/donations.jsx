import React from 'react';
import styles from './donations.module.css';
import Image from 'next/image';

const Donations = () => {
  return (
    <section className={styles.donationSection}>
      <div className={styles.donationContent}>
        
        <div className={styles.textContent}>
          <h2 className={styles.title}>Tithe Directly to <br/> Living Oaks Church</h2>
          <p className={styles.subtitle}>Your payment is secure. We use industry-standard encryption to protect your information.</p>
        </div>
        
        <div className={styles.actionContent}>
          <a
            href="https://subsplash.com/u/-XVHD6H/give"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.donateButton}
          >
            Tithe
            <svg className={styles.icon} viewBox="0 0 24 24">
              <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19V6.413L11.207 14.207L9.793 12.793L17.585 5H13V3H21Z"/>
            </svg>
          </a>

          <div className={styles.orDivider}>
            <span className={styles.orLine}></span>
            <span className={styles.orText}>OR</span>
            <span className={styles.orLine}></span>
          </div>
          
          <div className={styles.qrContainer}>
            <Image
              src="/images/LOC-QR.png"
              alt="Scan QR code to donate"
              width={120}
              height={120}
              className={styles.qrCode}
            />
            <p className={styles.qrCaption}>Scan on Phone</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;