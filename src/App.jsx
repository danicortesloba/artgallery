import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Painting from './components/Painting';
import Home from './components/Home';

function App() {
  return (
    <div className='main'>
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/painting/:paintingindex" element={<Painting />} />
    </Routes>
  </Router>
    </div>
  )
}

export default App
