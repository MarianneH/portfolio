import About from "../../sections/About/About";
import Projects from "../../sections/Projects/Projects";
import Welcome from "../../sections/Welcome/Welcome";
import Work from "../../sections/Work/Work";
import Headlines from "../../components/Headlines/Headlines";
import Navigation from "../../components/Navigation/Navigation";

function Home() {
  return (
    <>
      <Navigation />
      <Welcome />
      <About />
      <Projects />
      <Work />
    </>
  );
}
export default Home;
