"use client";

import React, { useState } from "react";
import styles from "./page.module.scss";
import Link from "next/link";
import { icons } from "../../../../public/icons";
import Image from "next/image";
import dynamic from 'next/dynamic';

const Curriculum = dynamic(() => import('@/component/Curriculum/Index'), { ssr: false });
const Entry = dynamic(() => import('@/component/Entry/Index'), { ssr: false });
const Fees = dynamic(() => import('@/component/Fees/Index'), { ssr: false });
const Reviews = dynamic(() => import('@/component/Reviews/Index'), { ssr: false });

const reviewsData = [
  {
    name: "Peter Thompson",
    position: "Alumnus",
    message:
      "The Data Science course provided me with a comprehensive education across all facets of data analysis, preparing me effectively for employment in the field.",
  },
  {
    name: "Osayande Felicia",
    position: "Student",
    message:
      "The course curriculum is meticulously crafted, encompassing a wide range of topics from Python programming to practical applications of Machine Learning.",
  },
];

const curriculumData = {
  lectures: 30,
  duration: 9.5,
  subtopics: [
    "Introduction to Data Science",
    "Data Wrangling and Preprocessing",
    "Statistical Analysis and Hypothesis Testing",
    "Machine Learning Algorithms",
    "Data Visualization Techniques",
    "Ethical Considerations in Data Science",
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
                <Link href={"/courses/data-analytics"}>Data Science</Link>
              </li>
            </ul>
          </div>
          <h1>Data Science</h1>
          <p className={styles.info}>
            Data Science is a transformative field at the intersection of
            statistics, computer science, and domain expertise. This course
            explores essential techniques for extracting meaningful insights
            from data, including statistical analysis, machine learning, and
            data visualization. Participants will gain practical experience with
            industry-standard tools and real-world datasets, equipping them to
            tackle complex challenges and drive informed decision-making.
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
            <button>
              Enroll Now
              <Image
                src={icons.enrollArr}
                alt={"enroll"}
                width={24}
                height={24}
              />
            </button>
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
          This online Data Science course, guided by seasoned professionals from
          around the world, equips participants to navigate the evolving data
          landscape with confidence. Through hands-on exploration of diverse
          real-world datasets, students develop a versatile skillset crucial for
          effective data analysis and strategic decision-making in today&apos;s
          data-driven environment.
        </p>

        <div className={styles.banner}>
          <h3>This Course Includes:</h3>
          <ul>
            <li>9.5 hours on-demand videos</li>
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
              "Hello Caroline, I would like to enroll in your Data Science Course"
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
        <Fees type="data-science" />
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
