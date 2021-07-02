import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';
import { Line } from 'react-chartjs-2';
import predictions from "./Predictions.json";

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
  return (
    <div>
      <Tabla />
      <Grafico />
    </div >
  );
}

function Grafico() {
  const data = {
    labels: ['1', '2', '3', '4', '5', '6'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Line data={data} options={options} />
    </>
  );
}

function Tabla() {
  const data = React.useMemo(
    () => [
      {
        col1: predictions.games.MK[0],
        col2: predictions.times.MK[0] + " minutos",
      },
      {
        col1: "Hollywood Rip Ride Rockit",
        col2: "20 minutos",
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