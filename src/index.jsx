//this file's job is to bootstrap the React Code
import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import { createStore } from 'redux'; //deprecated.  configStore?
import { Provider } from 'react-redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import moviesApp from './reducers/reducers';

import MainView from './components/main-view/main-view';

// Import statement to indicate bundling `./index.scss`
import './index.scss';

const store = createStore(moviesApp, devToolsEnhancer());

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return(
      <Provider store={store}>
         <Container>
           <MainView />
         </Container>
       </Provider>
     );
   }
 }

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);