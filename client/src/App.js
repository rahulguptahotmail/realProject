import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Companies from "./Components/Companies";
import Html from "./Pages/Coding/Html";
import Css from "./Pages/Coding/Css";
import JavaScript from "./Pages/Coding/JavaScript";
import About from "./Pages/About/About";
import Add from "./Pages/Tools/Add";
import Update from "./Pages/Tools/Update";
import Items from "./Pages/Tools/Items";
import CodingPage from "./Pages/Codings/CodingPage";


function App() {
  return (
    <div
      className=" rounded "
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(180, 84, 0,0.2),rgba(255,255,255,0.3),rgba(46, 204, 113,0.5))`,
      }}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <>
            <Route path="/coding/Html" element={<Html />} />
            <Route path="/coding/css" element={<Css />} />
            <Route path="/coding/javascript" element={<JavaScript />} />
          </>
          <>
            <Route path="/about/about" element={<About />} />
          </>
          <>
          <Route path="/tools/add" element={<Add/>} />
          <Route path="/tools/update/:id" element={<Update/>} />
          <Route path="/tools/items" element={<Items/>} />
          </>

          <>
          <Route path="/codingpage" element={<CodingPage/>}/>
          <Route path="/codingpage/:index" element={<CodingPage/>}/>
          </>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
