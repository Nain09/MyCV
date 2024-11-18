import  "./App.css";
import Navbar from  "./components/Navbar";
import Header from  "./components/Header";
import About from  "./components/About";
import Qualification from  "./components/Qualification";
import Contact from  "./components/Contact";
import Footer from  "./components/Footer";


const App = () => {
  return (
    <div className="App">
      <div>
        <Navbar/>
        <Header/>
        <About/>
        <Qualification/>
        <Contact />
        <Footer />
        <i className="fa fa-2x fa-angle-down text-white scroll-to-bottom" />
        <a href="#top" 
        className="btn btn-outline-dark px-0 back-to-top"
        onClick={(e) => e.precentDefault()}
        >
          <i className="fa fa-angle-double-up" />
        </a>
      </div>
    </div>
  );
};

export default App;
