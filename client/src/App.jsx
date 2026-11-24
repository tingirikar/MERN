import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Display from "./pages/Display.jsx"

export default function App() {
  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      <Link to="/display">Display</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/display" element={<Display />} />
      </Routes>
    </BrowserRouter>
  );
}
