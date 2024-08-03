import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { icons } from "../../../public/icons";

interface CurriculumProps {
  curriculumData: {
    lectures: number;
    duration: number;
    subtopics: Array<string>;
  };
}

const Index: React.FC<CurriculumProps> = ({ curriculumData }) => {
  return (
    <section id="curriculum" className={styles.curriculum}>
      <h3>Course Curriculum</h3>
      <ul className={styles.headLine}>
        {/* <li>
          <Image src={icons.lectures} alt={"lectures"} width={24} height={24} />
          {curriculumData.lectures} lectures
        </li> */}
        {/* <li>
          <Image src={icons.duration} alt={"duration"} width={24} height={24} />
          {curriculumData.duration}h duration
        </li> */}
      </ul>

      <table>
        {curriculumData.subtopics.map((data, index) => (
          <tr key={index}>
            <td>
              {data}
              <span>
                <Image
                  src={icons.arrowRight}
                  alt={"right-arrow"}
                  width={24}
                  height={24}
                />
              </span>
            </td>
          </tr>
        ))}
      </table>
    </section>
  );
};

export default Index;
