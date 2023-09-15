import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="App">
        <Navbar/>
        {/* Main content start */}
        <Outlet />
        {/* Main content end */}
        <Footer/>
    </div>
  );
}

export default App;



