import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Contact from "./components/contact";
import Details from "./components/details";
import ScrollToTop from "./components/scroll-to-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Bedroom from "./components/bedroom";
import Wardrobe from "./components/wardrobe";
import Hall from "./components/hall";
import Drawingroom from "./components/drawingroom";
import Bathroom from "./components/bathroom";
import Kitchen from "./components/kitchen";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/details" exact>
            <ScrollToTop>
              <Details />
            </ScrollToTop>
          </Route>
          <Route path="/contact" exact>
            <ScrollToTop>
              <Contact />
            </ScrollToTop>
          </Route>
          <Route path="/image/wardrobe" exact>
            <ScrollToTop>
              <Wardrobe />
            </ScrollToTop>
          </Route>
          <Route path="/image/bedroom" exact>
            <ScrollToTop>
              <Bedroom />
            </ScrollToTop>
          </Route>
          <Route path="/image/hall" exact>
            <ScrollToTop>
              <Hall />
            </ScrollToTop>
          </Route>
          <Route path="/image/drawingroom" exact>
            <ScrollToTop>
              <Drawingroom />
            </ScrollToTop>
          </Route>
          <Route path="/image/bathroom" exact>
            <ScrollToTop>
              <Bathroom />
            </ScrollToTop>
          </Route>
          <Route path="/image/kitchen" exact>
            <ScrollToTop>
              <Kitchen />
            </ScrollToTop>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

function LandingPage() {
  return (
    <div>
      <Home />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}
