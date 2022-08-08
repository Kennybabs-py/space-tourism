import React, { useState } from "react";
// import Image from "next/image";
import Link from "next/link";

import style from "./Header.module.scss";

const Header = () => {
  const [value, setValue] = useState<number>();
  const [toggle, setToggle] = useState(false);

  const handleToggle = (): void => {
    setToggle((prev) => !prev);
  };

  const listTab: string[] = ["Home", "destination", "crew", "technology"];

  return (
    <nav className={style.nav}>
      <img src="/assets/shared/logo.svg" width={40} height={40} alt="logo" />

      <hr className={style.line} />

      <div className={style.ham_box} onClick={handleToggle}>
        <div
          className={`${style.hamburger} ${toggle ? style.active : ""}`}
        ></div>
      </div>

      {/* mobile and hamburger */}
      <div className={`${style.hamburger_menu} ${toggle ? style.active : ""}`}>
        {listTab.map((item, index) => {
          return (
            <Link href={item === "Home" ? "/" : `/${item}`} key={index}>
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

      {/* desktop */}
      <div className={style.tab}>
        {listTab.map((item, index) => {
          return (
            <Link href={item === "Home" ? "/" : `/${item}`} key={index}>
              <a
                onClick={() => setValue(index)}
                className={index === value ? style.active_tab : ""}
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
