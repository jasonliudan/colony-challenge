import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import store, { history } from './store/store';


class Main extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      store
    };
  }

  public render() {
    return (
      <Provider store={store}>
        <App history={history} />
      </Provider>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
