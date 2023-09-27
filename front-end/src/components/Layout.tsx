import { ReactNode } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface Layout {
  children: ReactNode;
}

const Layout = ({ children }: Layout) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
