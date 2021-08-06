import React from 'react';
import algo from './fetcheadisimolince.json';
export default class Inicio extends React.Component {
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
      console.log(algo)
      return (
        <>
          <h2 className="ms-3 mt-3">PlaceAI</h2>
          <div className="card-group ms-3 mt-3 me-3">
            <div className="card bg-dark mb-3">
              <img class="card-img-top" src="images/Walt-Disney-MAgic-Kingdom-img.jpg" alt="Card image cap" style={{
                height: 250
              }}></img>
              <div className="card-img-overlay">
                <h5 className="card-title">Magic Kingdom</h5>
              </div>
            </div>
            <div className="card bg-dark mb-3">
              <img className="card-img-top" src={algo.img.HS} alt="Card image cap" style={{
                height: 250
              }} />
              <div className="card-img-overlay">
                <h5 className="card-title">Hollywood Studios</h5>
              </div>
            </div>
            <div className="card bg-dark mb-3">
              <img className="card-img-top" src={algo.img.AI} alt="Card image cap" style={{
                height: 250
              }} />
              <div className="card-img-overlay">
                <h5 className="card-title">Islands of Adventure</h5>
              </div>
            </div>
          </div>
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