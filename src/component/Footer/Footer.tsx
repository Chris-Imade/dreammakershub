import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { icons } from "../../../public/icons";

const Footer: React.FC = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerLinks}>
        <div>
          <h2>Get In touch</h2>
          <div className={styles.linksRow}>
            <Image src={icons.locationWhite} alt="location" />
            <p>Fully Remote</p>
          </div>
          <div className={styles.linksRow}>
            <Image src={icons.phoneWhite} alt="phone" />
            <p>+2347033729822</p>
          </div>
          <div className={styles.linksRow}>
            <Image src={icons.mailWhite} alt="mail" />
            <p>support@dreammakerhub.com</p>
          </div>
        </div>
        <div>
          <h2>Our courses</h2>
          <div className={styles.coursesLinksRow}>
            <Image src={icons.rightAngle} alt="" />
            <p>Data Analysis</p>
          </div>
          <div className={styles.coursesLinksRow}>
            <Image src={icons.rightAngle} alt="" />
            <p>Data Science</p>
          </div>
          <div className={styles.coursesLinksRow}>
            <Image src={icons.rightAngle} alt="" />
            <p>Web Design</p>
          </div>
          <div className={styles.coursesLinksRow}>
            <Image src={icons.rightAngle} alt="" />
            <p>App Design</p>
          </div>
          <div className={styles.coursesLinksRow}>
            <Image src={icons.rightAngle} alt="" />
            <p>Marketing</p>
          </div>
          <div className={styles.coursesLinksRow}>
            <Image src={icons.rightAngle} alt="" />
            <p>Artificial Intelligence</p>
          </div>
          <div className={styles.coursesLinksRow}>
            <Image src={icons.rightAngle} alt="" />
            <p>Machine Learning</p>
          </div>
        </div>
        <div className={styles.newsLetter}>
          <h2>newsletter</h2>
          <p>Don’t miss out on all our exciting new features and student offers to boot your learning capacity.</p>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          <span>&copy;</span> dreammakerhub.com.{" "}
          <span>All Rights Reserved. Designed by </span>CleverCode-Technologies
        </p>
        
        <ul>
          <li>
            <a href="#">Privacy</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">FAQs</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
