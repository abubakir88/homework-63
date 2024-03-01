import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Company from "./components/company/Company";
import Sertificate from "./components/sertificate/Sertificate";
import Product from "./components/product/Product";
import Info from "./components/info/Info";
import Group from "./components/group/Group";
import Footer from "./components/footer/Footer";
// import BackToTopButton from "./components/backtop/Backtop";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Company />
      <Sertificate />
      <Product />
      <Info />
      <Group />
      {/* <BackToTopButton /> */}
      <Footer />
    </div>
  );
}

export default App;
