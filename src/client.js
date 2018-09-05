import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import store, { history } from './redux/store'
import App from './containers/App'

const render = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App history={history} />
      </Provider>,
    document.getElementById('app')
  )
};

render();
