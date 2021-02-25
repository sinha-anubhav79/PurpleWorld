import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/nav";
import Home from "./components/home";
import About from "./components/about";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Contact from "./components/contact";

function App() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
