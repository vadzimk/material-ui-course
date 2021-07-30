import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './ui/Header.js';
import {ThemeProvider} from '@material-ui/styles'

import theme from './ui/Theme.js';
import routes from './routes.js';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header/>
        <Switch>
          {
            routes.map((item)=>(
              <Route exact path={item.path} component={item.component} key={item.label}/>
            ))
          }
        </Switch>
      </Router>

    </ThemeProvider>
  );
}

export default App;
