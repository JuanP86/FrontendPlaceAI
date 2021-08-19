import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

import Calendario from './calendario';
import Inicio from './inicio';
import * as f from "./functions";

import * as bootstrap from "bootstrap";
import "./app.scss";

export default class App extends React.Component {
  componentDidMount() {
    for (let el of f.$$('[title]')) new bootstrap.Tooltip(el);
  }

  render() {
    return (
      <div className="bg-dark d-flex flex-column h-100">
        <Router>
          <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-info bg-gradient">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/">PlaceAI</Link>
                <div className="collapse navbar-collapse" id="navbarToggler">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink to="/calendario" className="nav-link" activeClassName="active">Calendario</NavLink>
                    </li>
                  </ul>
                  <div className="btn-group">
                    <button type="button" className="btn btn-primary">Mí perfil</button>
                    <button type="button" className="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
                      <span className="visually-hidden">Mostrar menú de usuario</span>
                    </button>
                    <ul className="dropdown-menu">
                      <li>Cerrar sesión</li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          <main className="container text-white">
            <Switch>
              <Route path="/calendario/:park?">
                <h2><f.Icon name="calendar3" size="26" /> Calendario</h2>
                <hr />
                <Calendario />
              </Route>
              <Route path="/" exact={true}>
                <h2><f.Icon name="calendar" size="26" /> Inicio</h2>
                <hr />
                <Inicio />
              </Route>
              <Route path='*' exact={true}>
                <h2>Error 404</h2>
                <hr />
                <p>Esta página no existe.</p>
              </Route>
            </Switch>
          </main>
        </Router>
        <footer className="text-white p-3 shadow-lg bg-secondary bg-gradient fst-italic border-top border-white mt-auto">
          <p className="mb-auto">© Copyright 2021. Maximiliano Ostrower, Javier Liu y Juan Pablo Patxot.</p>
        </footer>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));