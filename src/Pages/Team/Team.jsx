import styles from "./Team.module.scss";
import { Card } from "../../Components/Teams/index";
import { Navbar, Footer } from "../../Components/index";
import Coordinator from "./Coordinator.json";
import Convener from "./Convener.json";
import Coreteam from "./Coreteam.json";
import Techlead from "./Techlead.json";
import TECH from "./Tech.json";
import ORGANISERS from "./Organisers.json";
// import data from "../../assets/team.json";

const MemberDetails = (data) => {
  return <Card key={data.id} {...data} />;
};

const Teams = () => {
  return (
    <div className={styles.teamsCont}>
      <Navbar />
      <div className={styles.bgPng}></div>

      <div className={styles.page}>
        <div className={styles.teamname}>
          <div className={styles.headingteamsa} id="CORE">
            CORE TEAM
          </div>{" "}
          <div className={styles.teamname_body}>
            <section className={styles.sec}> {Convener.map(MemberDetails)}</section>
            <section className={styles.sec}> {Coordinator.map(MemberDetails)}</section>
            <section className={styles.sec}> {Coreteam.map(MemberDetails)}</section>
          </div>
        </div>

        <div className={styles.teamname}>
          <div className={styles.headingteamsa} id="TECH">
            TECH TEAM
          </div>{" "}
          <div className={styles.teamname_body}>
            <section className={styles.sec}> {Techlead.map(MemberDetails)}</section>
            <section className={styles.sec}> {TECH.map(MemberDetails)}</section>
          </div>
        </div>

        <div className={styles.teamname}>
          <div className={styles.headingteamsa} id="ORGANISERS">
            ORGANISERS
          </div>{" "}
          <div className={styles.teamname_body}>{ORGANISERS.map(MemberDetails)}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Teams;
