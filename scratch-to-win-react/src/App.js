import logo from './logo.svg';
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

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
      <Header />
      <Routes>
        <Route path="/" element={<ScratchHome />} />
        <Route path="/form" element={<ScratchForm />} />
        {/* <Route path="/legal" element={<ScratchLegal />} /> */}
      </Routes>
      
      <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
