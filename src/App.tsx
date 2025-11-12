import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import CakeCustomizer from './components/CakeCustomizer';
import { Contact } from './components/Contact';
import Gallery from './components/Gallery';
import PrivacyPolicy from './components/PrivacyPolicy';

const MainPage: React.FC = () => (
  <>
    <div className="bg-pink-100 text-center py-2 text-gray-700 font-bold text-xl">
      The Cake Lounge
      <div className="mt-2">
        <Link to="/gallery" className="text-blue-600 hover:text-blue-800 underline">
          View Gallery
        </Link>
      </div>
    </div>
    <CakeCustomizer />
    <Contact />
    <footer className="bg-gray-800 text-white text-center py-4">
      <p className="text-sm">
        Page Developer Details - Mark Nissanka
      </p>
    </footer>
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    </Routes>
  );
}

    export default App;
