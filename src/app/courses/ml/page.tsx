"use client";

import React, { useState } from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import { icons } from "../../../../public/icons";
import Image from "next/image";
import { Curriculum, Entry, Fees, Reviews } from "@/component";

const reviewsData = [
  {
    name: "John Smith",
    position: "Data Scientist",
    message:
      "As an experienced professional in data science, I found this course to be a comprehensive dive into machine learning concepts and applications. It helped me advance my skills and stay competitive in the field.",
  },
  {
    name: "Emily Johnson",
    position: "Business Analyst",
    message:
      "The Machine Learning course was instrumental in bridging my gap in understanding complex data models. The hands-on approach and practical examples provided me with the confidence to apply machine learning techniques to real-world business challenges.",
  },
];

const curriculumData = {
  lectures: 30,
  duration: 8.5,
  subtopics: [
    "Introduction to Machine Learning Principles",
    "Supervised Learning Techniques",
    "Unsupervised Learning Methods",
    "Feature Engineering and Selection",
    "Model Evaluation and Validation",
    "Real-world Applications and Case Studies",
    "Ethics in Data Science and AI",
  ],
};

const Index: React.FC = () => {
  const [active, setActive] = useState<string>("about");
  return (
    <div className={styles.analyticsContainer}>
      <div className={styles.analyticsHero}>
        <div className={styles.leftHero}>
          <div className={styles.path}>
            <ul>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Image
                  src={icons.rightAngle}
                  height={9}
                  width={7}
                  alt={"right icon"}
                />
              </li>
              <li>
                <Link href={"/courses"}>Courses</Link>
              </li>
              <li>
                <Image
                  src={icons.rightAngle}
                  height={9}
                  width={7}
                  alt={"right icon"}
                />
              </li>
              <li>
                <Link href={"/courses/data-analytics"}>Machine Learning</Link>
              </li>
            </ul>
          </div>
          <h1>Machine Learning</h1>
          <p className={styles.info}>
            Our Machine Learning Course Module equips learners with essential
            skills in data-driven decision-making. Participants explore core
            machine learning principles, including supervised and unsupervised
            learning, regression, classification, and clustering techniques.
            They gain proficiency in industry-standard tools and libraries to
            analyze datasets, build predictive models, and evaluate performance,
            preparing them to solve real-world challenges.
          </p>
          <div className={styles.courseInfo}>
            <div>
              <Image
                width={29}
                height={29}
                src={icons.profile}
                alt={"profile icon"}
              />
              <p className={styles.other}>
                Instructor: <span>John Osamuyi</span>
              </p>
            </div>
            <div style={{ marginLeft: "32px" }}>
              <Image
                width={29}
                height={29}
                src={icons.profile}
                alt={"profile icon"}
              />
              <p className={styles.other}>20,000+ Learners</p>
            </div>
            {/* <div style={{ marginLeft: "32px" }}>
              <Image
                width={24}
                height={24}
                src={icons.calendar}
                alt={"calendar"}
              />
              <p className={styles.other}>
                Duration: <span>3 months</span>
              </p>
            </div> */}
          </div>
          {/* Star Ratings */}
          <div className={styles.ratings}>
            <p className={styles.rate}>6.5</p>
            <Image width={26} height={26} src={icons.star} alt={"star icon"} />
            <p>(1,267 ratings) 2,912 students</p>
          </div>
        </div>
        <div className={styles.rightHero}>
          <div className={styles.actionCard}>
            <div>
              <Image
                src={icons.money}
                width={24}
                height={24}
                alt={"money icon"}
              />
              <p>Ongoing Discount: 50% off</p>
            </div>
            <hr />
            <a
              href={`https://api.whatsapp.com/send?phone=+256776693887&text=${encodeURIComponent(
                "Hello Caroline, I would like to enroll in your Machine Learning Course"
              )}`}
              target="_blank"
            >
              <button>
                Enroll Now
                <Image
                  src={icons.enrollArr}
                  alt={"enroll"}
                  width={24}
                  height={24}
                />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.minorMenu}>
        <ul>
          <li
            className={active === "about" ? styles.active : ""}
            onClick={() => setActive("about")}
          >
            About Us
          </li>
          <li
            className={active === "course" ? styles.active : ""}
            onClick={() => setActive("course")}
          >
            Course Curriculum
          </li>
          <li
            className={active === "entry" ? styles.active : ""}
            onClick={() => setActive("entry")}
          >
            Entry Requirement
          </li>
          <li
            className={active === "fees" ? styles.active : ""}
            onClick={() => setActive("fees")}
          >
            Course Fees
          </li>
          <li
            className={active === "reviews" ? styles.active : ""}
            onClick={() => setActive("reviews")}
          >
            Reviews
          </li>
        </ul>
      </div>
      <div className={styles.pageContent}>
        <h1>About Us</h1>
        <p>
          This globally accessible Machine Learning course, curated by seasoned
          professionals, is designed to equip you with the skills necessary to
          thrive in the dynamic realm of data. Through comprehensive exploration
          of diverse real-world datasets, participants will cultivate a robust
          skillset essential for proficient data analysis.
        </p>

        <div className={styles.banner}>
          <h3>This Course Includes:</h3>
          <ul>
            <li>8.5 hours on-demand videos</li>
            <li>3 study materials</li>
            <li>Full lifetime access</li>
            <li>Certificate of Completion</li>
          </ul>
          <div className={styles.bottomInfo}>
            <Image
              src={icons.moneyWhite}
              alt={"Price"}
              width={24}
              height={24}
            />
            <p>Price: </p>
            <p>50% off</p>
          </div>
          <hr />
          <a
            href={`https://api.whatsapp.com/send?phone=+256776693887&text=${encodeURIComponent(
              "Hello Caroline, I would like to enroll in your Machine Learning Course"
            )}`}
            target="_blank"
          >
            <button>
              Enroll Now
              <Image
                src={icons.arrowRight}
                alt={"right-arrow-icon"}
                width={24}
                height={24}
              />
            </button>
          </a>
        </div>

        <Curriculum curriculumData={curriculumData} />
        <Entry />
        <Fees type="ml" />
        <div className={styles.reviews}>
          <h2>Reviews</h2>
          <div className={styles.cardContainer}>
            {reviewsData.map((review, index) => (
              <Reviews review={review} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
