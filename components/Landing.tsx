import React, { useState, useEffect } from "react";
import Header from "./Header";
import Link from "next/link";

const Landing = () => {
  return (
    <div>
      <main className="landing">
        <Header />
        <div className="landing-text">
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
        <Link href="/destination">
          <button>explore</button>
        </Link>
      </main>
    </div>
  );
};

export default Landing;
