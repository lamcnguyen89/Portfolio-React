import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Footer from './components/footer';

import './App.css';
import Navbar from './components/nav';

function App() {
  return (
    
      <BrowserRouter>
          <Navbar />
          <div className = "pageRoutes">
            <Route exact path= "/" component={About} />
            <Route exact path= "/portfolio" component={Portfolio} />
            <Route exact path= "/contact" component={Contact} />
          </div>
          <Footer />
      </BrowserRouter>
  
  );
}
export default App;
