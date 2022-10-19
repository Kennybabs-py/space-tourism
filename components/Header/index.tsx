import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import style from "./styles.module.scss";

const listTab = ["destination", "crew", "technology"];

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const router = useRouter();

  function handleToggle() {
    setToggle((prev) => !prev);
  }

  function handleRouting(path: string) {
    router.push(path);
    setToggle(false);
  }

  return (
    <nav className={style.nav}>
      <Image src="/assets/shared/logo.svg" width={40} height={40} alt="logo" />

      <hr className={style.line} />

      {/* desktop */}
      <div className={style.desktop_nav}>
        <Link href="/">
          <a
            className={`${router.asPath === "/" ? style.active_tab : null}`}
            onClick={() => handleRouting("/")}
          >
            00 home
          </a>
        </Link>

        {listTab.map((item, index) => {
          return (
            <Link href={`/${item}`} key={index}>
              <a
                onClick={() => handleRouting(`/${item}`)}
                className={`${
                  router.asPath === "/" + item ? style.active_tab : null
                }`}
              >
                0{index + 1} {item}
              </a>
            </Link>
          );
        })}
      </div>

      {/* mobile and hamburger */}

      <div className={style.hamburger_container} onClick={handleToggle}>
        <div
          className={`${style.hamburger} ${toggle ? style.active : ""}`}
        ></div>
      </div>

      <div className={`${style.mobile_nav} ${toggle ? style.active : ""}`}>
        <Link href="/">
          <a
            className={`${router.asPath === "/" ? style.active_tab : null}`}
            onClick={() => handleRouting("/")}
          >
            home
          </a>
        </Link>

        {listTab.map((item, index) => {
          return (
            <Link href={`/${item}`} key={index}>
              <a
                key={index}
                onClick={() => handleRouting(`/${item}`)}
                className={`${
                  router.asPath === "/" + item ? style.active_tab : null
                }`}
              >
                {item}
              </a>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Header;
