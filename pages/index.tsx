import type { NextPage } from "next";
import Layout from "../components/Layout";
import Landing from "../components/Landing";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Layout />
      <Landing />
    </div>
  );
};

export default Home;
