
import './App.css';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';

import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Portfolio from './components/portfolio';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path="/about-me" element={<About/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/blogs" element={<Blog/>}/>
      <Route path="/contact-me" element={<Contact/>}/>
     </Routes>

    </div>
  );
}

export default App;
