"use client"

import Image from "next/image";
import React, { useRef } from "react";
import { images } from "../../../public/images";
import styles from "./About.module.scss";
import Magnetic from "../AnimationCombo/Magnetic/Magnetic";
import { motion, useInView } from "framer-motion";
import { opacity, slideUp } from "./animation";

const About = () => {
  const description = useRef(null);
  const isInView = useInView(description);

  const phrase =
    "Dream Maker Hub Consultancy is a remote organisation that provides online and physical educational training, campaign and conducts academic activities globally. We train, develop and engage world-class volunteers";

  return (
    <section id="about" ref={description} className={styles.container}>
      <div>
        <Image
          width={435}
          height={492}
          src={images.about}
          alt="About Section"
          placeholder="blur"
        />
      </div>
      <div className={styles.description}>
        <h4>About Us</h4>
        <motion.h2 variants={opacity} animate={isInView ? "open" : "closed"}>
          Bringing Education to the world
        </motion.h2>
        <p className="m-0">
          {phrase?.split(" ").map((word, index) => {
            return (
              <span key={index}>
                <motion.span
                  style={{ lineHeight: 1.7 }}
                  variants={slideUp}
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <Magnetic>
          <button>Start Now</button>
        </Magnetic>
      </div>
    </section>
  );
};

export default About;
