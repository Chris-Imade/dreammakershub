"use client";

import React, { useState } from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import { icons } from "../../../../public/icons";
import Image from "next/image";
import { Curriculum, Entry, Fees, Reviews } from "@/component";

const reviewsData = [
  {
    name: "David Osayande",
    position: "Data Analyst",
    message:
      "The Artificial Intelligence course provided a thorough education in data analysis and machine learning techniques. It equipped me with practical skills essential for succeeding in the field.",
  },
  {
    name: "Emily Osunde",
    position: "Software Engineer",
    message:
      "I found the curriculum of this course to be well-organized, covering foundational concepts and practical applications of Artificial Intelligence. It was instrumental in enhancing my proficiency in AI development.",
  },
];

const curriculumData = {
  lectures: 30,
  duration: 8.5,
  subtopics: [
    "Introduction to Artificial Intelligence",
    "Machine Learning Fundamentals",
    "Natural Language Processing",
    "Computer Vision",
    "Ethical Considerations in AI",
    "Applications in Business and Industry",
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
                <Link href={"/courses/data-analytics"}>
                  Artificial Intelligence
                </Link>
              </li>
            </ul>
          </div>
          <h1>Artificial Intelligence</h1>
          <p className={styles.info}>
            Artificial Intelligence (AI) is revolutionizing industries with its
            ability to mimic human cognition. This course explores AI's
            foundational theories and practical applications, including machine
            learning, natural language processing, and computer vision.
            Participants gain hands-on experience with AI tools and techniques,
            preparing them to innovate and solve complex challenges in diverse
            fields.
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
            <div style={{ marginLeft: "32px" }}>
              <Image
                width={24}
                height={24}
                src={icons.calendar}
                alt={"calendar"}
              />
              <p className={styles.other}>
                Duration: <span>3 months</span>
              </p>
            </div>
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
          This comprehensive Artificial Intelligence course, led by industry
          experts with a global perspective, equips participants to navigate the
          evolving data landscape with confidence. Through hands-on exploration
          of diverse real-world datasets, you will cultivate essential skills
          necessary for effective data analysis and strategic decision-making.
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
              "Hello Caroline, I would like to enroll in your Artificial Intelligence Course"
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

        <Curriculum curriculumData={curriculumData} />
        <Entry />
        <Fees type="ai" />
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
