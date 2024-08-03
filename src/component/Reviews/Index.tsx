import React from "react";
import Image from "next/image";
import { icons } from "../../../public/icons";
import styles from "./styles.module.scss";
import { images } from "../../../public/images";

interface ReviewProps {
  review: {
    message: string;
    name: string;
    position: string;
  };
}

const Index: React.FC<ReviewProps> = ({ review }) => {
  return (
    <div className={styles.card}>
      <div className="">
        <Image
          src={images.review1}
          alt="review card 1"
          width={48}
          height={48}
        />
        <div className="">
          <h1 className={styles.nameOfReviewer}>{review.name}</h1>
          <div className="">
            <h5 className="">{review.position}</h5>
            <Image src={icons.stars} alt={"stars"} width={125} height={25} />
          </div>
        </div>
      </div>
      <p className="">{review.message}</p>
    </div>
  );
};

export default Index;
