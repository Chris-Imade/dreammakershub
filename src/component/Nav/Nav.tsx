import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import { images } from "../../../public/images";
import { icons } from "../../../public/icons";

const Nav: React.FC = () => {

  return (
    <nav className={styles.nav}>
      <div className={styles.firstRow}>
        <Image alt={"Logo"} src={images.logo} width={213.95} height={53.34} />
        <div>
          <div>
            <Image
              alt={"Location"}
              src={icons.location}
              width={31.45}
              height={31.45}
            />
            <div>
              <h2>Our Office</h2>
              <p>Fully Remote</p>
            </div>
          </div>
          <div style={{ marginLeft: 100 }}>
            <Image alt={"Mail"} src={icons.mail} width={31.45} height={31.45} />
            <div>
              <h2>Email Us</h2>
              <p>info@dreammakerhub.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.secondRow}>
        <div className={styles.call}>
          <Image
            alt={"call"}
            style={{ marginRight: 10 }}
            src={icons.call}
            width={31.45}
            height={31.45}
          />
          <h2>Call Us</h2>
        </div>
        <div className={styles.germany}>
          <Image
            alt={"German Flag"}
            src={icons.germanyFlag}
            width={36}
            height={27}
          />
          <p>Germany: +4917645658806</p>
        </div>
        <div>
          <Image
            alt={"UgandanFlag"}
            src={icons.ugandanFlag}
            width={36}
            height={27}
          />
          <p>Uganda: +256776693887</p>
        </div>
        <div>
          <Image
            alt={"our flag"}
            src={icons.nigeriaFlag}
            width={36}
            height={27}
          />
          <p>Nigeria: +2347033729822</p>
        </div>
        <div>
          <Image alt={"UK flag"} src={icons.ukFlag} width={36} height={22} />
          <p>UK: +447908347677</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
