import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Navbar from './components/nav';
import Footer from './components/footer';
import Header from './components/header';

import './App.css';

function App() {
  return (
    
      <BrowserRouter>
          <Navbar />
          <Header />
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
