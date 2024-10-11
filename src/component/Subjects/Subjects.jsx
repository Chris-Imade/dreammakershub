"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import cn from "classnames";
import { images as pictures } from "../../../public/images";

import "./style.scss";
import { useOnScreen } from "@/hook";

const images = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/dream-makers-hub.appspot.com/o/data-analytics.webp?alt=media&token=676955ff-f123-49f0-9aea-bd64606ec4c4",
    title: "Data Analytics",
    subtitle: "Unlock Insights",
    category: "Technology / Business",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/dream-makers-hub.appspot.com/o/data-science.webp?alt=media&token=5ec887a7-56db-4317-8bb8-3e722738fe44",
    title: "Data Science",
    subtitle: "Drive Decisions",
    category: "Technology / Innovation",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/dream-makers-hub.appspot.com/o/machine-learning.jpeg?alt=media&token=28d95775-6e80-431c-821b-9dbe3b6e71c3",
    title: "Machine Learning",
    subtitle: "Empower Algorithms",
    category: "Technology / Research",
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/dream-makers-hub.appspot.com/o/ai.jpeg?alt=media&token=e7f855ae-cda1-4ce7-9f1d-bde28cb6046e",
    title: "Artificial Intelligence",
    subtitle: "Future Tech",
    category: "Technology / AI",
  },
];

function GalleryItem({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div
      className={cn("gallery-item-wrapper", { "is-reveal": onScreen })}
      ref={ref}
    >
      <div></div>
      <div className={"gallery-item"}>
        <div className="gallery-item-info">
          <h1 className="gallery-info-title">{title}</h1>
          <h2 className="gallery-info-subtitle">{subtitle}</h2>
          <p className="gallery-info-category">{category}</p>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div></div>
    </div>
  );
}

export default function Subjects() {
  const [activeImage, setActiveImage] = useState(1);

  const ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".gallery-item-wrapper");

    ScrollTrigger.matchMedia({
      // For screens smaller than 768px (mobile)
      "(max-width: 768px)": function () {
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            start: "50% 50%", // Start the animation sooner for mobile devices
            trigger: ref.current,
            pin: true,
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
            end: () => `+=${ref.current.offsetWidth}`,
          },
        });
      },

      // For screens wider than 768px (tablet and desktop)
      "(min-width: 769px)": function () {
        gsap.to(sections, {
          xPercent: -100 * (sections.length - 1),
          ease: "none",
          scrollTrigger: {
            start: "top top", // Default behavior for larger screens
            trigger: ref.current,
            pin: true,
            scrub: 0.5,
            snap: 1 / (sections.length - 1),
            end: () => `+=${ref.current.offsetWidth}`,
          },
        });
      },
    });

    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach((trig) => trig.kill());
    };
  }, []);

  const handleUpdateActiveImage = (index) => {
    setActiveImage(index + 1);
  };

  return (
    <section className="section-wrapper gallery-wrap">
      <div className="gallery" ref={ref}>
        {images.map((image, index) => (
          <GalleryItem
            key={index}
            index={index}
            {...image}
            updateActiveImage={handleUpdateActiveImage}
          />
        ))}
      </div>
    </section>
  );
}
