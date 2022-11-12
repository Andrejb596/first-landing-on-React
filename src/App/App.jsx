import { HashRouter } from "react-router-dom";
import { Navigation } from "../routes/Navigation/Navigation";
import { Routes } from "../routes/Routes";
import { Footer } from "../components/Footer/Footer";

function App() {
  return (
    <HashRouter >
      <Navigation />
      <Routes />
      <Footer />
    </HashRouter>
  );
}

export default App;
