import './App.css';

import Header from './components/header/Header';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';

function App() {

  return (
    <>
    <div className="rootContainerApp">
      <div className="headerApp">
        <Header />
      </div>
      <div className="bodyApp">
        <Body />
      </div>
      <div className="footerApp">
        <Footer />
      </div>
    </div>
    </>
  )
}

export default App
