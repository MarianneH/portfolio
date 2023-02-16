import styles from "./Home.module.css";
import About from "../../sections/About/About";
import Projects from "../../sections/Projects/Projects";
import Welcome from "../../sections/Welcome/Welcome";
import Work from "../../sections/Work/Work";
import Outro from "../../sections/Outro/Outro";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.width}>
        <Welcome />
        <About />
        <Projects />
        <Work />
        <Outro />
      </div>
    </div>
  );
}
export default Home;
