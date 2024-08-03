"use client"

import React, { useEffect, useRef, ReactNode, RefObject } from "react";
import styles from "./style.module.scss";
import gsap from "gsap";
import { Magnetic } from "@/component"

interface RoundedBtnProps {
  children: ReactNode;
  backgroundColor?: string;
  [key: string]: any; // For any other props
}

const RoundedBtn: React.FC<RoundedBtnProps> = ({
  children,
  backgroundColor = "#9AC93D",
  ...attributes
}) => {
  const circle: RefObject<HTMLDivElement> = useRef(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "125%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current?.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  return (
    <Magnetic>
      <div
        className={styles.roundedButton}
        style={{ overflow: "hidden" }}
        onMouseEnter={manageMouseEnter}
        onMouseLeave={manageMouseLeave}
        {...attributes}
      >
        {children}
        <div
          ref={circle}
          style={{ backgroundColor }}
          className={styles.circle}
        ></div>
      </div>
    </Magnetic>
  );
};

export default RoundedBtn;
