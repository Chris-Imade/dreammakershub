import React from "react";
import styles from "./styles.module.scss";

interface FeesProps {
  type: string;
}

const Index: React.FC<FeesProps> = ({ type }) => {
  // Function to format the WhatsApp message based on the type
  const formatWhatsAppMessage = () => {
    let message = "";

    switch (type) {
      case "data-science":
        message = "Hello Caroline, I would like to make an enquiry regarding Data Science. Could you please provide information on your services?";
        break;
      case "ml":
        message = "Hello Caroline, I would like to make an enquiry regarding Machine Learning. Could you please provide information on your services?";
        break;
      case "data-analytics":
        message = "Hello Caroline, I would like to make an enquiry regarding Data Analytics. Could you please provide information on your services?";
        break;
      case "ai":
        message = "Hello Caroline, I would like to make an enquiry regarding Artificial Intelligence. Could you please provide information on your services?";
        break;
      default:
        message = "Hello Caroline, I would like to make an enquiry. Could you please provide information on your services?";
        break;
    }

    return encodeURIComponent(message);
  };

  return (
    <section id="course-fees" className={styles.fees}>
      <h3>Course Fees</h3>
      <p>
        Consult Our Staff for more details regarding payments & Course fees in
        your region.
      </p>
      <a
        href={`https://api.whatsapp.com/send?phone=+256776693887&text=${formatWhatsAppMessage()}`}
        target="_blank"
      >
        <button>Consult Now</button>
      </a>
    </section>
  );
};

export default Index;