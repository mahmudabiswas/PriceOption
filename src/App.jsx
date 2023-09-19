import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import Phone from "./Components/Phone/Phone";
import PriceOption from "./Components/Price/PriceOption";
import ReChart from "./Components/ReChart";

function App() {
  return (
    <>
      <Navbar />
      <PriceOption />
      <Phone />
      <ReChart />
    </>
  );
}

export default App;
