"use client"

import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { icons } from "../../../public/icons";
import { gsap } from "gsap";

const Testimonial = () => {
  const testimonials = [
    {
      testimony:
        "I can boldly say that I for one have seen and experienced the value in DMH courses. I took the data analytics training and have been enjoying it ever since.",
      name: "Henry Jones",
      image: "quote1.avif",
    },
    {
      testimony:
        "The machine learning course was a game-changer for my career. The practical approach and real-world examples made the learning process enjoyable and effective.",
      name: "James Mateo",
      image: "quote2.jpeg",
    },
    {
      testimony:
        "DMH's AI course exceeded my expectations. The instructors are knowledgeable, and the content is relevant to current industry trends. Highly recommend!",
      name: "Alice Theodore",
      image: "she-quote.jpeg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const quoteRef = useRef<any>(null);

  useEffect(() => {
    gsap.fromTo(
      quoteRef.current.children,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.2 }
    );
  }, [activeIndex]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className={styles.container}>
      <div>
        <h4>Testimonials</h4>
        <h2>What our students say</h2>
      </div>

      <div className={styles.quote}>
        <Image width={71} height={71} src={icons.quote} alt="quote" />

        <div className={styles.carouselWrapper} ref={quoteRef}>
          {testimonials.map((quote, i) => (
            <div
              className={`${styles.quoteTest} ${
                i === activeIndex ? styles.active : ""
              }`}
              key={i}
            >
              <p>{quote.testimony}</p>
              <Image
                width={150}
                height={150}
                src={`/images/quotes/${quote.image}`}
                alt={quote.name}
              />
              <h3>{quote.name}</h3>
              <span>Student</span>
            </div>
          ))}
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, i) => (
            <div className={styles.dotsContainer} key={i}>
              <span
                className={`${styles.dot} ${
                  i === activeIndex ? styles.activeDot : ""
                }`}
                onClick={() => handleDotClick(i)}
              ></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
