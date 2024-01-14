import './App.scss';
import Info from './projectProducts/Info/Info';
import Laptops from './projectProducts/LaptopProducts/Laptops';
import "swiper/css";
import Phones from './projectProducts/PhonePrducts/Phones';
function App() {
  return (
    <div className="App">
      <Phones/>
      <Laptops/>
      <Info/>
    </div>
  );
}

export default App;
