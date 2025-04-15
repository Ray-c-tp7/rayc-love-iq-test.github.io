import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Results from './pages/Results';
import Pay from './pages/Pay';

const App: React.FC = () => {
  // 获取 GitHub Pages 的基础路径
  const basename = process.env.PUBLIC_URL;

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/results" element={<Results />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </Router>
  );
};

export default App; 