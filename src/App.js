 import Background from './components/Background';
import './App.css';
import Navbar from './components/Navbar.js';
import ParticleRing from './components/ParticleRing.js';
function App() {
  return (
  <>
  <Navbar/>
  <Background/>
  <h1 className="ok">this component is not working</h1>\
  <ParticleRing/>
 </>
  );
}
export default App;
