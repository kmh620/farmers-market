import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}








// ---------- index.js before rewriting in JSX ---------

// var heading = React.createElement('h1', {}, 'Help Queue');
// var ticketLocation = React.createElement('h3', {}, '3a');
// var ticketNames = React.createElement('h3', {}, 'Thato and Haley');
// var ticketIssue = React.createElement('h3', {}, 'Firebase wont save record');
// var app = React.createElement('div', {}, heading, ticketLocation, ticketNames, ticketIssue);
//
// ReactDOM.render(
//   app,
//   document.getElementById('react-app-root')
// );





// --------- first React App : "Hello World" ---------

// function liveTime() {
//   var greeting = React.createElement('h1', {}, 'Help Queue!');
//   // this invokes React core library.
//   // createElement() takes 3 arguments (1. types, 2. props, 3. children of the element).
//   var clock = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);
//
//   var app = React.createElement('div', {}, greeting, clock);
//
//   ReactDOM.render(
//     app,
//     document.getElementById('react-app-root')
//   );
// }
//
// setInterval(liveTime, 1000);
// invoke react-dom library,
// render() renders React elemtns to the DOM, requires 2 args (1. what to render, 2. where to render it)

// ** this method can also take a callback function as a 3rd arg.
