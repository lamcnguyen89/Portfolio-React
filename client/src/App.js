import React from 'react';
import { BrowserRouter, Route, Redirect} from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Footer from './components/footer';
import ErrorMessage from './components/errormessage';
import Thanks from './components/thanks';

import './App.css';
import Navbar from './components/nav';

function App() {
  return (
    
      <BrowserRouter>
          <Navbar />
          <div className = "pageRoutes">
            <Redirect from="/" exact to="/about" />
            <Route exact path= "/about" component={About} />
            <Route exact path= "/portfolio" component={Portfolio} />
            <Route exact path= "/contact" component={Contact} />
            <Route exact path= "/error" component={ErrorMessage} />
            <Route exact path= "/thanks" component={Thanks} />
          </div>
          <Footer />
      </BrowserRouter>
  
  );
}
export default App;
