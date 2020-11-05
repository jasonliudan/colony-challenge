import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import * as React from 'react';
import { Route, Switch } from 'react-router';

import Home from './pages/Home';

interface IAppProps {
  history: History;
}

const App = ({ history }: IAppProps) => {

  return (
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact={true} path="/" component={Home} />
        </Switch>
      </div>
    </ConnectedRouter>
  );
};

export default App;
