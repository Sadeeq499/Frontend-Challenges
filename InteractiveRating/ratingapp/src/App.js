import logo from "./logo.svg";
import "./App.css";
import Card from "./InterractiveRating/card";
import ThankYouCard from "./InterractiveRating/ThankYouCard";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="ThankYouCard" element={<ThankYouCard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
