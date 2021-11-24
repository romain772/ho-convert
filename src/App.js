import './App.css';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './components/Home';
import ServiceID from './components/ServiceID'
import IccID from './components/IccID'
import FactID from './components/FactID';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/ServiceID" element={<ServiceID/>}/>
          <Route path="/IccID" element={<IccID/>}/>
          <Route path="/FactID" element={<FactID/>}/>
          <Route path="/" exact element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
