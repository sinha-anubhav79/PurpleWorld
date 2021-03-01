import React from "react";
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
import Drawingroom from "./components/drawingroom";
import Kitchen from "./components/kitchen";
import Process from "./components/process";
import Service from "./components/service";
import ValueProp from "./components/value-prop";

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
              <Process />
            </ScrollToTop>
          </Route>
          <Route path="/image/bedroom" exact>
            <ScrollToTop>
              <Bedroom />
            </ScrollToTop>
          </Route>
          <Route path="/image/drawingroom" exact>
            <ScrollToTop>
              <Drawingroom />
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
      <ValueProp />
      <About />
      <Gallery />
      <Service />
      <Contact />
    </div>
  );
}
