import Headlines from "../../components/Headlines/Headlines";
import About from "../../sections/About/About";
import Projects from "../../sections/Projects/Projects";
import Welcome from "../../sections/Welcome/Welcome";
import Work from "../../sections/Work/Work";

function Home() {
  return (
    <>
      <Headlines headline_text="Hallo" />
      <Welcome />
      <About />
      <Projects />
      <Work />
    </>
  );
}
export default Home;
