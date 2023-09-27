import About from "../components/About/About";
import Banner from "../components/Banner/Banner";
import Contact from "../components/Contact/Contact";
import Products from "../components/Products/Products";
import SearchForCategory from "../components/SearchForCategory/SearchForCategory";

const Home = () => {
  return (
    <>
      <Banner />
      <SearchForCategory />
      <Products />
      <About />
      <Contact />
    </>
  );
};

export default Home;
