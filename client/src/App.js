import {Home, About, Notes, Trash} from './pages'

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Notes" element={<Notes />} />
      <Route path="/Trash" element={<Trash />} />
    </Routes>
  ) 
};

export default App; 