"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { images } from "../../../public/images";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Magnetic from "../AnimationCombo/Magnetic/Magnetic";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

interface Slide {
  image: string;
  sub_text: string;
  quote1: string;
  quote2: string;
  quote3: string;
}

const Header: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2500);

    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slides: Slide[] = [
    {
      image: images.slides.first_slide,
      sub_text: "From world-class tutors",
      quote1: "Learn at your own pace, anywhere.",
      quote2: "Access education anytime, anywhere.",
      quote3: "Flexible learning, any day.",
    },
    {
      image: images.slides.second_slide,
      sub_text: "Globally recognized certificates",
      quote1: "Gain skills while working with us.",
      quote2: "Teaching and learning build solid understanding.",
      quote3: "Master your subject by applying what you learn.",
    },
    {
      image: images.slides.third_slide,
      sub_text: "Get connected while you learn",
      quote1: "Meet diverse, great minds.",
      quote2: "Experience global connectivity.",
      quote3: "Connect with great minds worldwide.",
    },
  ];

  return (
    <>
      <div
        className={styles.imageContainer}
        style={{
          width: windowDimensions.width,
          height: windowDimensions.height - 60,
        }}
      >
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          keyBoardControl={true}
          customTransition="transform 500ms ease-in-out"
          transitionDuration={500}
        >
          {slides.map((slide, i) => (
            <div key={i} className={styles.imageWrapper}>
              <Image
                className={styles.images}
                src={slide.image}
                alt="slider image"
                placeholder="blur"
                layout="fill"
                sizes="100vw"
                priority={i === 0}
              />
              <div className={styles.controls}>
                <div className={styles.quoteSection}>
                  <p className={styles.sub_text}>{slide.sub_text}</p>
                  {loaded && (
                    <TypeAnimation
                      sequence={[
                        slide.quote1,
                        1000,
                        slide.quote2,
                        1000,
                        slide.quote3,
                        1000,
                      ]}
                      wrapper="p"
                      speed={50}
                      style={{
                        fontSize: "35px",
                        color: "white",
                        fontWeight: 700,
                        marginTop: "20px",
                      }}
                      repeat={Infinity}
                    />
                  )}

                  <Magnetic>
                    <button>Start Now</button>
                  </Magnetic>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className={styles.mobile}>
        {loaded && (
          <TypeAnimation
            sequence={[
              slides[0].quote1,
              1000,
              slides[0].quote2,
              1000,
              slides[0].quote3,
              1000,
            ]}
            wrapper="p"
            speed={50}
            style={{
              fontSize: "35px",
              color: "white",
              fontWeight: 700,
              marginTop: "20px",
            }}
            repeat={Infinity}
            className={styles.typeText}
          />
        )}

        <Magnetic>
          <button>Start Now</button>
        </Magnetic>
      </div>
    </>
  );
};

export default Header;
