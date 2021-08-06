import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

import Calendario from './calendario.js';
import Inicio from './inicio.js';

class App extends React.Component {
  render() {
    return (
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
                <div class="btn-group">
                  <button type="button" class="btn btn-primary">Mí perfil</button>
                  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
                    <span class="visually-hidden">Mostrar menú de usuario</span>
                  </button>
                  <ul class="dropdown-menu">
                    <li>Cerrar sesión</li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <main className="container text-white h-100">
          <Switch>
            <Route path="/calendario">
              <h2>Calendario</h2>
              <hr />
              <Calendario />
            </Route>
            <Route path="/" exact={true}>
              <h2>Inicio</h2>
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
    );
  }
}

ReactDOM.render(<App />,
  document.getElementById("root")
);