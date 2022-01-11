import Navbar from "./Components/Navbar/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
const App = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <About />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default App;
