
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, bindActionCreators } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connect, Provider } from "react-redux";
import reducer, { actions, selectors} from './redux';
import saga from './saga';
import './index.css';
import App from './App';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(saga);

const mapStateToProps = state => ({
  incomeExpenditure: selectors.getState(state)
});

const mapDistpachToProps = dispatch => ({
  incomeExpenditureActions: bindActionCreators(actions, dispatch)
});

const AppContainer = connect(
  mapStateToProps,
  mapDistpachToProps
)(App);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

