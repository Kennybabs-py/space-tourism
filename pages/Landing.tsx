import React from "react";
import Header from "components/Header/Header";
import Link from "next/link";
import styles from "styles/Landing.module.scss";

const Landing = () => {
  return (
    <div>
      <main className={styles.landing}>
        <Header />
        <div className={styles.landing_text}>
          <span>so, you want to travel to</span>
          <span>space</span>
          <span>
            {" "}
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </span>
        </div>
        <Link href="/Destination">
          <button className={styles.button}>explore</button>
        </Link>
      </main>
    </div>
  );
};

export default Landing;
