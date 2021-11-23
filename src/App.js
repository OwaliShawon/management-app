import logo from './logo.svg';
import './App.css';
import Products from './components/Products/Products';
import Catagories from './components/Categories/Catagories';

function App() {
  return (
    <div className="App">
      <p>Welcome</p>
      <Products></Products>
      <Catagories></Catagories>
    </div>
  );
}

export default App;
