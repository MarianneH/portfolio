import About from "../../sections/About/About";
import Projects from "../../sections/Projects/Projects";
import Welcome from "../../sections/Welcome/Welcome";
import Work from "../../sections/Work/Work";
import Headlines from "../../components/Headlines/Headlines";

function Home() {
  return (
    <>
      <Welcome />
      <About />
      <Projects />
      <Work />
      <Headlines headline_text="this is it" />
    </>
  );
}
export default Home;
