import About from "../../sections/About/About";
import Projects from "../../sections/Projects/Projects";
import Welcome from "../../sections/Welcome/Welcome";
import Work from "../../sections/Work/Work";
import Button from "../../components/Button/Button";

function Home() {
  return (
    <>
      <Welcome />
      <About />
      <Projects />
      <Work />
      <Button button_text="Get in touch" />
    </>
  );
}
export default Home;
