import Image from "next/image";
import React from "react";
import { icons } from "../../../public/icons";
import styles from "./styles.module.scss";
import Magnetic from "../AnimationCombo/Magnetic/Magnetic";

const ThirdRow = () => {
  const links = ["Home", "About", "Courses", "Contact"];

  return (
    <div className={styles.thirdRow}>
      <div className={styles.left}>
        <button>
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
        </button>
        <div>
          <ul>
            {links.map((link, i) => (
              <li key={i}>
                <Magnetic>
					<a className={"active"} href={i === 0 ? '/' : `#${link.toLowerCase()}`}>
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
