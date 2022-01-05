import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import About from "./pages/about";

const App = () => {
  return (

      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </Router>

// <Link to="/home">
            <button>a</button>
        </Link>
  );
}

export default App;
