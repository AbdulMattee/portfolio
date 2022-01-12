import Navbar from "./Components/Navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Service from "./Components/Service/Service.jsx";
import Experience from "./Components/Experience/Experience.jsx";
import Work from "./Components/Work/Work.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ToastContainer autoClose={1500} />
              <Navbar />
              <Home />
              <About />
              <Service />
              <Experience />
              <Work />
              <Contact />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
