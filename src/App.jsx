import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Company from "./components/company/Company";
import Sertificate from "./components/sertificate/Sertificate";
import Product from "./components/product/Product";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Company />
      <Sertificate />
      <Product />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
