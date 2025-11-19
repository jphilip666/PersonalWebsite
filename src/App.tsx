import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { Router } from './Router';
import { FaAppStore } from "react-icons/fa";

function App() {
  return (
    <>
      <BrowserRouter>
        <h1 className="text-5xl text-yellow-500 font-bold underline">
          Hello world!
          <FaAppStore />
        </h1>
        {/* Navigation */}
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Routes */}
        <Router/>

      </BrowserRouter>
    </>
  )
}

export default App
