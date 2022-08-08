import React, { useState } from "react";
import styles from "./Tech.module.scss";
import spaceData from "public/data.json";
import { TechI } from "@/utils/@types/types";
import Header from "@/components/Header/Header";

const Technology = () => {
  const [value, setValue] = useState(0);
  const tech = spaceData.technology;

  const { name, images, description }: TechI = tech[value];

  return (
    <section className={styles.technology}>
      <Header />
      <div className={styles.launch_text}>
        <span>03</span>space launch 101
      </div>

      <div className={styles.launch_vehicle}>
        <div className={styles.slider_container}>
          {tech.map((item, index) => {
            const {} = item;
            return (
              <span
                key={index}
                onClick={() => setValue(index)}
                className={index === value ? styles.active_btn : ""}
              >
                {index}
              </span>
            );
          })}
        </div>

        <div className={styles.vehicle_info}>
          <div className={styles.vehicle_text}>
            <div className={styles.terminology}>
              <span>the terminology...</span>
              <span>{name}</span>
            </div>
            <span className={styles.description}>{description}</span>
          </div>

          <img
            loading="lazy"
            src={images.portrait}
            alt={name}
            className={styles.image_portrait}
          />
          <img
            loading="lazy"
            src={images.landscape}
            alt={name}
            className={styles.image_landscape}
          />
        </div>
      </div>
    </section>
  );
};

export default Technology;
