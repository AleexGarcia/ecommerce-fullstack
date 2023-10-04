import { ReactNode } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

interface Layout {
  children: ReactNode;
}

const Layout = ({ children }: Layout) => {
  return (
    <div className="flex flex-col justify-between min-h-[100vh]">
      <Header />
      <main className="flex flex-col justify-center">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
