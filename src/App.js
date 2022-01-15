import { useRef, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Service from "./Components/Service/Service.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Work from "./Components/Work/Work.jsx";
import Contact from "./Components/Contact/Contact.jsx";
const App = () => {
  let home = useRef();
  let about = useRef();
  let service = useRef();
  let experience = useRef();
  let work = useRef();
  let contact = useRef();
  const [name, setName] = useState("home");
  useEffect(() => {
    window.addEventListener("scroll", HandleScroll);
    return () => {
      window.removeEventListener("scroll", HandleScroll);
    };
  }, []);
  const HandleScroll = () => {
    let { top: _home } = home.current.getBoundingClientRect();
    let { top: _about } = about.current.getBoundingClientRect();
    let { top: _service } = service.current.getBoundingClientRect();
    let { top: _experience } = experience.current.getBoundingClientRect();
    let { top: _work } = work.current.getBoundingClientRect();
    let { top: _contact } = contact.current.getBoundingClientRect();
    let _name = 0;

    if (_home <= 300) _name = "home";
    if (_about <= 300) _name = "about";
    if (_service <= 300) _name = "services";
    if (_experience <= 300) _name = "experience";
    if (_work <= 300) _name = "works";
    if (_contact <= 300) _name = "contact";
    setName(_name);
  };
  const NavigateTo = (component) => {
    window.scrollTo({
      behavior: "smooth",
      top: document.getElementById(component).offsetTop,
    });
  };
  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <ToastContainer autoClose={1500} />
              <Navbar name={name} NavigateTo={NavigateTo} />
              <div ref={home} id="home">
                <Home />
              </div>
              <div ref={about} id="about">
                <About />
              </div>

              <div ref={service} id="services">
                <Service />
              </div>
              <div ref={experience} id="experience">
                <Experience />
              </div>
              <div ref={work} id="works">
                <Work />
              </div>
              <div ref={contact} id="contact">
                <Contact />
              </div>
            </>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
