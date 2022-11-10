import { HashRouter } from "react-router-dom";
import { Navigation } from "../routes/Navigation/Navigation";
import { Routes } from "../routes/Routes";

const routs = {
  Home: 'Home',
  AboutUs: 'AboutUs',
  FindSpacemen: 'FindSpace',
  ShareSpace: 'ShareSpace',
  PromoteSpace: 'PromoteSpace'
}

function App() {
 

  return (
    <HashRouter >
      <Navigation />
      <Routes />
    </HashRouter>
  );
}

export default App;
