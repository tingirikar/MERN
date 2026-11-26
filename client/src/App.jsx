import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LiveText from "./pages/LiveText.jsx";
import Display from "./pages/Display.jsx"
import Reviews from "./pages/Reviews.jsx";
import PasswordValidator from "./pages/PasswordValidator.jsx";
import Todo from "./pages/Todo.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/"> Home |</Link>
      <Link to="livetext"> LiveText |</Link>
      <Link to="/display"> Display |</Link>
      <Link to="/reviews"> Reviews |</Link>
      <Link to="/passwordValidator"> PasswordValidator |</Link>
      <Link to="/todo"> Todo |</Link>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livetext" element={<LiveText />} />
        <Route path="/display" element={<Display />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/passwordvalidator" element={<PasswordValidator />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
  );
}
