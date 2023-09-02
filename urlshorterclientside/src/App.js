import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Urlshorter from './Urlshorter';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Urlshorter />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
