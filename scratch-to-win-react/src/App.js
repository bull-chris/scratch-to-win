import logo from './logo.svg';
import './css/style.css';

import Header from './components/header.js';
import Footer from './components/footer.js';
import ScratchHome from './components/scratch-home.js';

function App() {
  return (
    <div className='app'>
      <Header />
      <ScratchHome />
      <Footer />
    </div>
  );
}

export default App;
