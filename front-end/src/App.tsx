import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./MainRoutes";

function App() {
  return (
    <BrowserRouter>
      <Layout>
          <MainRoutes/>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
