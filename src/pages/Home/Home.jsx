import styles from "./Home.module.css";
import Headlines from "../../components/Headlines/Headlines";
import About from "../../sections/About/About";
import Projects from "../../sections/Projects/Projects";
import Welcome from "../../sections/Welcome/Welcome";
import Work from "../../sections/Work/Work";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.width}>
        <Welcome />
        <About />
        <Projects />
        <Work />
      </div>
    </div>
  );
}
export default Home;
