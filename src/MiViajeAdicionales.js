import React from 'react';
import {
  Link
} from "react-router-dom";
import { withRouter } from 'react-router-dom';
import * as f from "./functions";

class MiViajeAdicionales extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  componentDidMount() {

  }

  submitForm(e) {
    e.preventDefault()
    this.props.history.push('/miviaje/4');
  }

  render() {
    return (
      <div>
        <h2 className="ms-3 mt-3"><strong>Adicionales</strong></h2>
        <hr style={{
          marginLeft: 10,
          marginRight: 10
        }} />
        <form onSubmit={this.submitForm.bind(this)}>
          <div>
            <h5 className="ms-3">¿Que otras Restricciones tenés al armar tu programa?</h5>
          </div>
          <div className="ms-3 row mb-3">
            <f.Modal className="text-light text-nowrap col" id="modalEntrada" name="Horario de Entrada">
              <div>
                <input type="time" />
              </div>
            </f.Modal>
            <f.Modal className="text-light text-nowrap col ms-3" id="modalSalida" name="Horario de Salida">
              <div>
                <input type="time" />
              </div>
            </f.Modal>
            <f.Modal className="text-light text-nowrap col ms-3" id="modalAtraccionesNo" name="Atracciones Prohibidas">
            </f.Modal>
          </div>
          <div className="ms-3 row mb-3">
          <f.Modal className="text-light text-nowrap col" id="modalDistancia" name="Distancia máxima entre atracciones">
              <div>
                <input min="0" type="number" /> <span> Minutos</span>
              </div>
            </f.Modal>
            <f.Modal className="text-light text-nowrap col ms-3" id="modalAltura" name="Altura requerida">
              <div>
                <input type="number" />
              </div>
            </f.Modal>
            <f.Modal className="text-light text-nowrap col ms-3" id="modalAtraccionesSi" name="Atracciones Obligatorias">
            </f.Modal>
          </div>
          <div className="ms-3">
            <p>No tiene restricciones para su viaje</p>
            <ul id="listaRestricciones">
            </ul>
          </div>
        <div className="mt-3">
          <button type="submit" className="btn btn-success mt-5 ms-3 mb-3"> Siguiente</button>
          <Link to="/miviaje/2">
            <button type="button" className="btn btn-dark mt-5 ms-3 mb-3"> Atrás</button>
          </Link>
        </div>
        </form>
      </div>
    );
  }
}

export default withRouter(MiViajeAdicionales);