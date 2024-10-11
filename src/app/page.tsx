"use client";

import React, { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import {
  About,
  Courses,
  Footer,
  Header,
  Loader,
  Nav,
  QuickAction,
  Subjects,
  Testimonial,
  ThirdRow,
  Team,
} from "@/component";
import { AnimatePresence } from "framer-motion";
import Script from "next/script";

const Home: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";

    const newLenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1,
      syncTouch: false,
      wheelMultiplier: 2,
      infinite: false,
    });

    setLenis(newLenis);

    gsap.registerPlugin(ScrollTrigger);

    const raf = (time: number) => {
      newLenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    gsap.ticker.add((time) => {
      newLenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      newLenis.destroy();
      gsap.ticker.remove(() => newLenis.raf(gsap.ticker.time * 1000));
    };
  }, []);

  useEffect(() => {
    if (!lenis) return;

    lenis.on("scroll", (e: any) => {
      ScrollTrigger.update();
    });

    const timeout = setTimeout(() => {
      setIsLoading(false);
      // Re-enable scrolling after loading
      document.body.style.overflow = "auto";
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 2000);

    return () => clearTimeout(timeout);
  }, [lenis]);

  return (
    <div>
      <ReactLenis root>
        <AnimatePresence mode="wait">{isLoading && <Loader />}</AnimatePresence>
        <div id="container" className="w-[100vw]">
          <Header />
          <About />
          <Subjects />
          <Courses />
          <Team />
          <QuickAction />
          <Testimonial />
        </div>

        <Script
          async
          src="https://api.cronbot.ai/v1/widgets/app/app_2nva9whyxtya"
        />
      </ReactLenis>
    </div>
  );
};

export default Home;
