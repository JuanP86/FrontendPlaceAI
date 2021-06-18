import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';
import predictions from "./Predictions.json";
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
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
      <Grafico />
      <Tabla />
    </div >
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

function Grafico() {
  let dataPoints = [];
  const options = {
    theme: "dark2",
    title: {
      text: "Tiempos de Espera estos Días"
    },
    axisY: {
      suffix: "minutos"
    },
    data: [{
      type: "line",
      xValueFormatString: "DD",
      dataPoints: dataPoints
    }]
  }
  return (
    <div>
      <CanvasJSChart options={options}
        onRef={ref => this.chart = ref}
      />
      {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
    </div>
  );
}