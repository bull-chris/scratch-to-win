import logo from './logo.svg';
import './css/style.css';

import Header from './components/header.js';
import Footer from './components/footer.js';
import ScratchHome from './components/scratch-home.js';
import ScratchForm from './components/scratch-form';

function App() {
  return (
    <div className='app'>
      <Header />
      {/* <ScratchHome /> */}
      <ScratchForm />
      <Footer />
    </div>
  );
}

export default App;
