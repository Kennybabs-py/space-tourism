import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [value, setValue] = useState<number>();

  const [toggle, setToggle] = useState(false);

  const listTab = ["home", "destination", "crew", "technology"];

  return (
    <nav className="nav">
      <img src="/assets/shared/logo.svg" width={48} height={48} alt="logo" />
      <hr />

      {/* <div className="tab">
        <Link href="/">
          <a>00 Home</a>
        </Link>
        <Link href="/destination">
          <a className="active-tab">01 Destinations</a>
        </Link>

        <a>02 Crew</a>
        <a>03 Technology</a>
      </div> */}
      <div
        className={`hamburger ${toggle ? "active" : ""}`}
        onClick={() => setToggle((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`hamburger-menu${toggle ? "_active" : ""}`}>
        {listTab.map((item, index) => {
          return (
            <Link href={item === "home" ? "/" : `/${item}`} key={index}>
              <a
                key={index}
                onClick={() => setValue(index)}
                className={`'' ${index === value && "active-tab"}`}
              >
                {item}
              </a>
            </Link>
          );
        })}
      </div>

      <div className="tab">
        {listTab.map((item, index) => {
          return (
            <Link href={item === "home" ? "/" : `/${item}`} key={index}>
              <a
                key={index}
                onClick={() => setValue(index)}
                className={`'' ${index === value && "active-tab"}`}
              >
                0{index} {item}
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;
