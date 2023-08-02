import { Route, Routes } from 'react-router-dom';
import './App.css';
import Head from './components/Head';
import Home from "./components/Home";
import Project from './components/Project';
import Links from './components/Link';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Head/>
    <Routes>
      <Route exact path="/" Component={Home}/>
      <Route exact path="/about" Component={About}/>
      <Route exact path="/links" Component={Links}/>
      <Route exact path="/projectlink" Component={Project}/>
      
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
