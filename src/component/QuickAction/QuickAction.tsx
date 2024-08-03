"use client"

import React, { useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { icons } from "../../../public/icons";

interface FormFields {
    name: string;
    email: string;
    course: string;
}

const QuickAction: React.FC = () => {
    const [formField, setFormField] = useState<FormFields | null>(null);

  return (
    <section className={styles.container} id="contact">
      <div className={styles.left}>
        <h4>Never Stop Learning</h4>
        <h2>30% Off For New Students</h2>
        <p>
          don’t miss out on this exclusive offer for new and incoming students,
          we guaratee you an internet of educational assets. You might not even
          need to make payments in order to learn, in most cases you only make
          payments if you desire to get a certificate for the training taken.
        </p>

        <div className={styles.ticksContainer}>
            <div className={styles.tick}>
                <Image alt="tick" src={icons.tick} width={24} height={24} />
                <p>Educational technical support</p>
            </div>
            <div className={styles.tick}>
                <Image alt="tick" src={icons.tick} width={24} height={24} />
                <p>Free and affordable campaign</p>
            </div>
            <div className={styles.tick}>
                <Image alt="tick" src={icons.tick} width={24} height={24} />
                <p>Free and affordable courses</p>
            </div>
        </div>
      </div>

      <form className={styles.right}>
        <div className={styles.formHeader}>
            <h1>Sign Up Now</h1>
        </div>

        <input type="text" placeholder="Your name" className={styles.name} />
        <input type="email" placeholder="Your email" className={styles.email} />
        <select name="Select A course" id="">
            <option value="Select A Course">Data Analytics</option>
            <option value="Data Analytics">Data Science</option>
            <option value="Data Analytics">Artificial Intelligence</option>
            <option value="Data Analytics">Web Development</option>
            <option value="Data Analytics">Machine Learning</option>
        </select>

        <button>
            Sign Up now
        </button>
      </form>
    </section>
  );
};

export default QuickAction;
