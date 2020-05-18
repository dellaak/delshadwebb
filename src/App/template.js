import React from 'react';
import render from './template';

// the component
class App extends React.Component {}

// add render method from template
// and export the component
App.prototype.render = render;
export default App;
