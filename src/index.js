import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import {commentAdd} from './actions/actions';
import CommentsList from './components/CommentsListContainer';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <CommentsList />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

store.dispatch(commentAdd('pierwszy komentarz'));
store.dispatch(commentAdd('drugi komentarz'));