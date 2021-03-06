import './css/App.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import NavBar from './components/navbar';
import Footer from './components/footer'
import Main from './components/main.js'



function App() {
  return (
    <div className="app">
      <div className='container-fluid'>
        <NavBar />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
