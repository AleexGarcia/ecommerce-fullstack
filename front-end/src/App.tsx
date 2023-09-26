import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
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
    </>
  );
}

export default App;
