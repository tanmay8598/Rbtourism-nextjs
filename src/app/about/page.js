import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {/* <Image src="/aboutus1.jpg" fill={true} alt="" className={styles.img} /> */}
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>About Rome Bright</h1>
          {/* <h2 className={styles.imgDesc}>Khuddam e zair</h2> */}
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>
            Who We Are: Unlocking Journeys, Enriching Stories
          </h1>
          <p className={styles.desc}>
            At Rome Bright, we are more than a travel company; we are
            storytellers of unforgettable adventures. Rooted in passion and
            fueled by wanderlust, we exist to turn travel dreams into vibrant
            narratives, connecting explorers with the world's wonders.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do: Curating Your Extraordinary Journey</h1>
          <p className={styles.desc}>
            Rome Bright specializes in crafting personalized travel experiences.
            From handpicked hotels to thoughtfully designed packages, we bring
            meticulous attention to detail, ensuring your journey is seamless
            and extraordinary. Our commitment is to transform each trip into a
            captivating chapter in your life's travel story
            <br />
          </p>
          {/* <Button url="/contact" text="Contact" /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
