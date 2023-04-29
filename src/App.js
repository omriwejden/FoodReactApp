import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
          <Route path="/" exact component={home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
        
        <Footer />
      </Router>
    </div>
  );
}

export default App;
