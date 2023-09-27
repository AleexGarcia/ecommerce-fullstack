import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";
import SearchForCategory from "./components/SearchForCategory/SearchForCategory";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <SearchForCategory/>
      <Products/>
      <About/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
