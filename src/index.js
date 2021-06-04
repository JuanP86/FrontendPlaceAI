import React from 'react';
import ReactDOM from 'react-dom';
import bootstrap from "bootstrap"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default function App() {
  return (
    <Router>
      <body>
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link className="navbar-brand" to="/">Home</Link>
              <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/inspeccionar" className="nav-link">Inspeccionar</Link>
                  </li>
                  <li></li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route path="/inspeccionar">
              <Inspeccionar />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </body>
    </Router>
  );
}

function Home() {
  return (
    <div id="Home-Div" className="container-fluid">
      <h2>Bienvenido a PlaceAI</h2>
      <p>Esta es la pagina de entrada</p>
    </div>
  );
}

function Inspeccionar() {
  const data = React.useMemo(
    () => [
      {
        col1: "E.T Adventure",
        col2: "40 minutos",
      },
      {
        col1: "Hollywood Rip Ride Rockit",
        col2: "20 minutos",
      },
      {
        col1: "Kang & Kodos' Twirl 'n' Hurl",
        col2: "30 minutos",
      },
      {
        col1: "Revenge of the Mummy",
        col2: "30 minutos",
      },
      {
        col1: "Shrek 4-D",
        col2: "30 minutos",
      },
      {
        col1: "MEN IN BLACK™ Alien Attack™",
        col2: "20 minutos",
      },
      {
        col1: "Monsters, Inc. Laugh Floor",
        col2: "5 minutos",
      },
      {
        col1: "Walt Disney World Railroad - Frontierland",
        col2: "10 minutos",
      },
      {
        col1: "Walt Disney's Enchanted Tiki Room",
        col2: "40 minutos",
      },
      {
        col1: "Sorcerers of the Magic Kingdom",
        col2: "15 minutos",
      },
      {
        col1: "The Barnstormer",
        col2: "25 minutos",
      },
    ], []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "Juegos",
        accessor: "col1",
      },
      {
        Header: "Tiempos de Espera",
        accessor: "col2",
      }
    ], []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <div className="container-fluid" id="Inspeccionar-Div">
      <table {...getTableProps()} style={{ border: 'solid 1px white' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    borderBottom: 'solid 3px gray',
                    background: 'black',
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '10px',
                        border: 'solid 1px gray',
                        background: 'black',
                        color: "white",
                        width: "250px",
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
