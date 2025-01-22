import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from "./Pages/MainPage";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/portfolio" element={<MainPage/>} />
        <Route path="/" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
