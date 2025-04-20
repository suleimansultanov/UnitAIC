import './i18n';
import VRLandingPage from './components/VRLandingPage';
import HomePage from './components/HomPage';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'

function App() {
  return     <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog" element={<VRLandingPage />} />
              </Routes>
            </Router>;
}

export default App;