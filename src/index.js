import React from 'react';
import ReactDOM from 'react-dom';
import "./app.scss";
import App from './app';

ReactDOM.render(<App/>, document.getElementById("app"));
document.body.removeAttribute("style");