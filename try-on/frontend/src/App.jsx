import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import AppCanvas from "./components/AppCanvas";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Sunglasses from "./components/Sunglasses";
import Eyeglasses from "./components/Eyeglasses";
import Allproducts from "./components/Allproducts";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/tryon" element={<AppCanvas />} />
        <Route path="/sunglasses" element={<Sunglasses />} />
        <Route path="/eyeglasses" element={<Eyeglasses />} />
        <Route path="/all" element={<Allproducts />} />
      </Routes>
    </>
  );
};

export default App;
