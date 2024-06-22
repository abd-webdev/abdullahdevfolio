
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import Projects from './components/projects';
import Services from './components/services';
import Social from './components/social';


 const App = ()=> {
  return (

    <>
    <Header/>
    <Main/>
    <About/>
    <hr />
    <Services/>
    <Projects/>
    <Contact/>
    <Social/>
    <Footer/>
    </>
  );
}

export default App;
