import './css/style.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Header from './components/header.js';
import Footer from './components/footer.js';
import ScratchHome from './components/scratch-home.js';
import ScratchForm from './components/scratch-form';
import ScratchGame from './components/scratch-game';
import ScratchLegal from'./components/legal-page';
function App() {
  return (
    <BrowserRouter>
      <div className='app'>
      <Header />
      <Routes>
        <Route path="/scratch-to-win/" element={<ScratchHome />} />
        <Route path="/form" element={<ScratchForm />} />
        <Route path="/game" element={<ScratchGame />} />
        <Route path="/legal" element={<ScratchLegal />} /> 
      </Routes>
      
      <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
