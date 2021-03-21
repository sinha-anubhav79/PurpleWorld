import React, { lazy, Suspense } from "react";
import "./css/styles.css";
import "./App.css";
import Nav from "./components/nav";
// import Home from "./components/home";
// import About from "./components/about";
import Footer from "./components/footer";
// import Gallery from "./components/gallery";
// import Contact from "./components/contact";
// import Details from "./components/details";
// import ScrollToTop from "./components/scroll-to-top";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// import Bedroom from "./components/bedroom";
// import Drawingroom from "./components/drawingroom";
// import Kitchen from "./components/kitchen";
// import Process from "./components/process";
// import Service from "./components/service";
// import ValueProp from "./components/value-prop";
// import FAQs from "./components/faq";
// import Testimonials from "./components/testimonials";

const Home = lazy(() => import("./components/home"));
const About = lazy(() => import("./components/about"));
const Gallery = lazy(() => import("./components/gallery"));
const Contact = lazy(() => import("./components/contact"));
const ScrollToTop = lazy(() => import("./components/scroll-to-top"));
const Details = lazy(() => import("./components/details"));
const Bedroom = lazy(() => import("./components/bedroom"));
const Drawingroom = lazy(() => import("./components/drawingroom"));
const Kitchen = lazy(() => import("./components/kitchen"));
const Process = lazy(() => import("./components/process"));
const Service = lazy(() => import("./components/service"));
const ValueProp = lazy(() => import("./components/value-prop"));
const FAQs = lazy(() => import("./components/faq"));
const Testimonials = lazy(() => import("./components/testimonials"));

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Suspense fallback={<Loader />}>
              <LandingPage />
            </Suspense>
          </Route>
          <Route path="/details" exact>
            <Suspense fallback={<Loader />}>
              <ScrollToTop>
                <Details />
              </ScrollToTop>
            </Suspense>
          </Route>
          <Route path="/contact" exact>
            <Suspense fallback={<Loader />}>
              <ScrollToTop>
                <Contact />
                <Process />
              </ScrollToTop>
            </Suspense>
          </Route>
          <Route path="/image" exact>
            <Suspense fallback={<Loader />}>
              <ScrollToTop>
                <Bedroom />
                <Drawingroom />
                <Kitchen />
              </ScrollToTop>
            </Suspense>
          </Route>
          <Route path="/image/bedroom" exact>
            <Suspense fallback={<Loader />}>
              <ScrollToTop>
                <Bedroom />
              </ScrollToTop>
            </Suspense>
          </Route>
          <Route path="/image/drawingroom" exact>
            <Suspense fallback={<Loader />}>
              <ScrollToTop>
                <Drawingroom />
              </ScrollToTop>
            </Suspense>
          </Route>
          <Route path="/image/kitchen" exact>
            <Suspense fallback={<Loader />}>
              <ScrollToTop>
                <Kitchen />
              </ScrollToTop>
            </Suspense>
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
      <Testimonials />
      <FAQs />
      <Contact />
    </div>
  );
}

function Loader() {
  return (
    <div className="conatiner h-100 d-flex justify-content-center loader">
      <div className="my-auto">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}
