import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "Khuddam e zair Contact Information",
  description: "This is Contact Page",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <p>
        <span style={{ fontWeight: "700", color: "black" }}>Email: </span>
        info@romebright.com
      </p>
      <p>
        <span style={{ fontWeight: "700", color: "black" }}>Mobile: </span>
        +974-66178767
      </p>
      <p>
        <span style={{ fontWeight: "700", color: "black" }}>Office: </span>
        Doha, Qatar
      </p>
    </div>
  );
};

export default Contact;
