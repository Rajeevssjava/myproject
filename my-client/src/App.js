// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './style/App.css';

// Component imports
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

import { Add } from './components/Add';
import { Update } from './components/Update';
import { Delete } from './components/Delete';
import { Find } from './components/Find';
import { FindAll } from './components/FindAll';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/add" replace />} />
            <Route path="/add" element={<Add />} />
            <Route path="/update" element={<Update />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/find" element={<Find />} />
            <Route path="/findall" element={<FindAll />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
