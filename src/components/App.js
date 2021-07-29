import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './ui/Header.js';
import {ThemeProvider} from '@material-ui/styles'

import theme from './ui/Theme.js';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/services/custom-software' component={() => <div>Custom software</div>}/>
          <Route exact path='/services/mobile-apps' component={() => <div>Mobile apps</div>}/>
          <Route exact path='/services/websites' component={() => <div>Websites</div>}/>
          <Route exact path='/services' component={() => <div>Services</div>}/>
          <Route exact path='/revolution' component={() => <div>Revolution</div>}/>
          <Route exact path='/about' component={() => <div>About</div>}/>
          <Route exact path='/contact' component={() => <div>Contact</div>}/>
          <Route exact path='/estimate' component={() => <div>Estimate</div>}/>
          <Route exact path='/' component={() => <div>Home</div>}/>
        </Switch>
      </Router>

    </ThemeProvider>
  );
}

export default App;
