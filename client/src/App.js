import { Home, About, Notes, Trash, Reminder } from './pages'
import SideBar from './containers/SideBar';

import { Routes, Route } from "react-router-dom";

import styles from './app.module.css';

const App = () => {
  return (
    <div className={styles.app_contaner} >
      <SideBar />
      <div className={styles.app_center} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/reminder" element={<Reminder />} />
          <Route path="/trash" element={<Trash />} />
        </Routes>
      </div>
    </div>

  )
};

export default App; 