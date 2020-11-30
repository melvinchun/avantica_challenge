import React from 'react';
import { AppProvider } from './context/context';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import Home from './views/Home';
import Game from './views/Game';

const history = createBrowserHistory();

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} history={history} />
            <Route exact path='/game' component={Game} />
          </Switch>
        </div>
      </Router>
    </AppProvider>
  )
}

export default App;
