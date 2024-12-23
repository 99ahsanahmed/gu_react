import './App.css';
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Menu from './components/Menu';
function App() {
  const item1 = {
    name: "Spicy Chicken Wings",
    description: "Our signature spicy wings",
    price: "Rs. 500",
    image:
    "https://images.deliveryhero.io/image/fd-pk/Products/49411247.jpg?width=%s"
    };

const item2 = {
    name: "Classic Fried Chicken",
    description: "Traditional recipe",
    price: "Rs. 350",
    image:
    "https://images.deliveryhero.io/image/fd-pk/Products/26754778.jpg?width=%s"
  };

const item3 = {
      name: "Chicken Burger Combo",
      description: "Burger with fries and drink",
      price: "Rs. 650",
      image:
      "https://images.deliveryhero.io/image/fd-pk/Products/58219340.jpg?width=%s"
    };
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <div className='flex flex-col justify-center gap-6 py-24'>
      <h1 className='capitalize text-[#8f160d] text-4xl font-bold text-center'>Our speciality menu</h1>
      
      <div className='flex justify-center items-center gap-7'> 
      <Menu item_data={item1}/>
      <Menu item_data={item2}/>
      <Menu item_data={item3}/>
      </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
