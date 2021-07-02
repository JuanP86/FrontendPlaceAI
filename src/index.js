import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import { useTable, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table';
import { Line } from 'react-chartjs-2';

class App extends React.Component {
  render() {
    return (
      <Router>
        <header>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <Link className="navbar-brand" to="/">Inicio</Link>
              <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link to="/inspeccionar" className="nav-link">Inspeccionar</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <main className="container text-white">
          <Switch>
            <Route path="/inspeccionar">
              <Inspeccionar />
            </Route>
            <Route path="/">
              <Inicio />
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

class Inicio extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    fetch("http://placeai-api.azurewebsites.net/index?key=ai")
      .then(resp => resp.json())
      .then(data => {
        this.setState({ response: data.response })
      });
  }

  render() {
    return (
      <>
        <h2>PlaceAI</h2>
        <ul>
          {this.state.response && this.state.response.map((a, b) => {
            return (<li key={a.id}>{a.id}: {a.name}</li>)
          })}
          {!this.state.response ? "Cargando..." : ""}
        </ul>
      </>
    )
  }
}


class Inspeccionar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    fetch("http://placeai-api.azurewebsites.net/index?key=ai")
      .then(resp => resp.json())
      .then(data => {
        this.setState({ parks: data.response })
      })
  }
  cambioParque = () => {
    fetch("http://placeai-api.azurewebsites.net/rides?key=ai&park="+document.getElementById("parqueSelec").value)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ rides: data.response })
      })
  }

  render() {
    return (
      <div>
        <div>
          <input type="date" id="fechaSelec">
          </input>
          <select id="parqueSelec" onChange={this.cambioParque}>
            <option defaultValue>Seleccione</option>
            {!this.state.parks ? <option disabled defaultValue>Cargando...</option> : ""}
            {this.state.parks && this.state.parks.map((a, b) => {
              return (<option key={a.id} value={a.id}>{a.name}</option>)
            })}
          </select>
          <select id="atracSelec" onChange={Grafico.cambioAtraccion}>
            <option disabled defaultValue>Seleccione</option>
            {this.state.rides && this.state.rides.map((a, b) => {
              return (<option key={a.id} value={a.id}>{a.name}</option>)
            })}
        </select>
        </div>
        <Tabla />
        <Grafico />
      </div >
    );
  }
}

class Grafico extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount(){
  }

  cambioAtraccion(){
    fetch("http://placeai-api.azurewebsites.net/waits/"+document.getElementById("atracSelec").value+"?key=ai")
    .then(resp => resp.json())
      .then(data => {
        this.setState({ waits: data.response.intervals })
      })
  }

  cambioFecha (){
    fetch("http://placeai-api.azurewebsites.net/waits/"+document.getElementById("atracSelec").value+"?key=ai&time="+document.getElementById("fechaSelec").value)
    .then(resp => resp.json())
      .then(data => {
        this.setState({ waits: data.response.intervals })
      })
  }

  render() {
    let tiempos = [];
    for (let i = 0; i < 23; i++) {
      tiempos[i] = Math.floor(Math.random() * (120 - 0)) + 0;
    }

    let horas = [];
    for (let i = 0; i < 16; i++) {
      horas[i] = 8 + i;
    }

    const data = {
      labels: horas,
      datasets: [
        {
          label: 'tiempos de espera de ese día',
          data: tiempos,
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
        <div className="container-sm">
          <Line data={data} options={options} />
        </div>
      </>
    );
  }
}

function Tabla() {
  /*const data = React.useMemo(
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
  );*/
  return (<div></div>);
}

ReactDOM.render(<App />,
  document.getElementById('root')
);