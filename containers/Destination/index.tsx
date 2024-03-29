import { useState } from "react";
import spaceData from "public/data.json";
import styles from "./styles.module.scss";
import { DestinationI } from "@/utils/@types/types";

const Destinations = () => {
  const [value, setValue] = useState(0);

  const destinations = spaceData.destinations;

  const { name, images, description, distance, travel }: DestinationI =
    destinations[value];

  return (
    <section className={styles.destinations}>
      <div className={styles.pick_text}>
        <span>01 </span>pick your destination
      </div>

      <div className={styles.planet}>
        {/* each destination button container */}
        <div className={styles.btn_container}>
          {destinations.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setValue(index)}
                className={index === value ? styles.active_btn : ""}
              >
                {item.name}
              </button>
            );
          })}
        </div>
        {/* planet infornation */}

        <div className={styles.planet_info}>
          <img loading="lazy" src={images.png} alt={name} />
          <div className={styles.info_text}>
            <span className={styles.name}>{name}</span>
            <span className={styles.description}>{description}</span>
            <div className={styles.distance_travel}>
              <div className={styles.distance}>
                <span>AVG. DISTANCE</span>
                <span>{distance}</span>
              </div>
              <div className={styles.travel}>
                <span>EST. TRAVEL TIME</span>
                <span>{travel}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Destinations;
