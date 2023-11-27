import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { Routes ,Route } from 'react-router-dom';
import Products from "./component/Products";
import Product from "./component/Product";

function App() {
  return (
 <>
  <Navbar/>
  <Routes>
  <Route path='/' component= {<Home/>} />
    <Route path="/products" component= {Products} />
    <Route path="/products/:id" component= {Product} />
    </Routes>
 </>
  );
};

export default App;
