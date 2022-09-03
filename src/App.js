import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Products from './components/product/product';


function App() {
 
  return (
    <div className="App">
      <Header></Header>
      <Products></Products>
    </div>
  );
}

export default App;
