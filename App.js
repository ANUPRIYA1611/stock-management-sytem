import logo from './logo.svg';
import './App.css';
import Loginpage from './Component/Loginpage';
import {Route,Routes} from 'react-router-dom';
import Signup from './Component/Signup';
import Homepage from './Component/Homepage';
import Book from './Component/Book';
import Dress from './Component/Dress';
import Furniture from './Component/Furniture';
import About from './Component/About';
function App() {
  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<Loginpage/>}></Route>
        <Route path="/homepage" element={<Homepage/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/book" element={<Book/>}></Route>
        <Route path="/dress" element={<Dress/>}></Route>
        <Route path="/furniture" element={<Furniture/>}></Route>
        <Route path="/about" element={<About/>}></Route>
      </Routes>
        
     
       
    </div>
  );
}

export default App;
