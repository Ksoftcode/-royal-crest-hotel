import React from "react";
import { AiOutlineContacts } from "react-icons/ai";
import Card from "../ui/Card";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <Card>
        <div className={styles.welcomeBox}>
          <p className={styles.welcomep1}>WELCOME TO</p>
          <h1 className={styles.welcomeHeading}>ROYAL CREST</h1>
          <p className={styles.welcomep2}>HOTELS</p>
          <p className={styles.welcomep3}>
            Enjoy luxury redefined at the most affordable rates
          </p>
          <div className={styles.buttonContainer}>
            <button className={styles.contactUsButton}>
              <span className={styles.contactIcon}>
                <AiOutlineContacts />
              </span>
              <span className={styles.buttonTitle}>BOOK NOW</span>
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Hero;
