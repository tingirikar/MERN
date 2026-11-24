import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Display from "./pages/Display.jsx"
import Reviews from "./pages/Reviews.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/display">Display</Link>
      <Link to="/reviews">Reviews</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display" element={<Display />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  );
}
