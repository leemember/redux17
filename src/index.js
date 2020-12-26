import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
//redux-devtools-extension는 리덕스 스토어 내부 상태를 확인하기 위해 리덕스 개발자 도구 사용용도

const store = createStore(rootReducer);

ReactDOM.render( 
  <Provider store = {store}>
    <App />
  </Provider> ,
  document.getElementById('root')
);