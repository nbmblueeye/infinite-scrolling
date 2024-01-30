import { Outlet } from 'react-router-dom';
import './assets/App.scss';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {

  return (
    <>
      <Header/>
      <div className="main-content">
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
