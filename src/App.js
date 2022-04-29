import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="max-w-7xl mx-auto my-4">
          <Routes>
            <Route path="/" element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="*" element={<>404 NOT FOUND!</>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
