
import './App.scss';
import Home from "./pages/home/Home.jsx";
import OrganizationInfo from './pages/organizationInfo/OrganizationInfo';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Stakeholder from './pages/stakeholder/Stakeholder';
import Disruption from './pages/disruption/Disruption';
import Comparative from './components/comparativeanalysis/Comparative';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/organizationinfo" element={<OrganizationInfo />}/>
      <Route path="/stakeholder" element={<Stakeholder />} />
      <Route path="/disruption" element={<Disruption />} />
      <Route path="/comparative" element={<Comparative />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
