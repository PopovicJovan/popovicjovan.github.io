import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MainPage from "./Pages/MainPage";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
