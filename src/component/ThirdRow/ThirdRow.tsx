"use client";

import Image from "next/image";
import React, { useState } from "react";
import { icons } from "../../../public/icons";
import styles from "./styles.module.scss";
import Magnetic from "../AnimationCombo/Magnetic/Magnetic";

const ThirdRow = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const links = ["Home", "About", "Courses", "Contact"];

  const programLinks = [
    { name: "Data Science", path: "/courses/data-science/" },
    { name: "Data Analytics", path: "/courses/data-analytics/" },
    { name: "Machine Learning", path: "/courses/ml/" },
    { name: "Artificial Intelligence", path: "/courses/ai/" },
  ];

  // Toggles the dropdown open/close state
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className={styles.thirdRow}>
      <div className={styles.left}>
        <button className="relative" onClick={toggleDropdown}>
          <div>
            <Image alt={"book"} src={icons.book} width={28.3} height={28.3} />
            <p>Programs</p>
          </div>
          <Image
            alt={"arrDown"}
            src={icons.arrDown}
            width={28.3}
            height={28.3}
          />

          {/* Dropdown Menu for Programs */}
          {isDropdownOpen && (
            <div className={styles.dropdown}>
              <ul className={styles.dd_list}>
                {programLinks.map((program, index) => (
                  <li className="hover:cursor-pointer" key={index}>
                    <Magnetic>
                      <a
                        target="_blank"
                        referrerPolicy="no-referrer"
                        href={program.path}
                      >
                        {program.name}
                      </a>
                    </Magnetic>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </button>

        <div>
          <ul>
            {links.map((link, i) => (
              <li key={i}>
                <Magnetic>
                  <a
                    className={i === 0 ? "active" : ""}
                    href={i === 0 ? "/" : `#${link.toLowerCase()}`}
                  >
                    {link}
                  </a>
                </Magnetic>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Magnetic>
        <button className={styles.right}>
          <p className={styles.text}>Join Now</p>
        </button>
      </Magnetic>
    </div>
  );
};

export default ThirdRow;
