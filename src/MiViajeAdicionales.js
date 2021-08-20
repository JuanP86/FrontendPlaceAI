import React from 'react';
import {
  Link
} from "react-router-dom";
import { withRouter } from 'react-router-dom';

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
            <button className="btn btn-info text-light text-nowrap col" data-bs-toggle="modal" data-bs-target="#modalEntrada">Horario Máximo de Entrada</button>
            <button className="btn btn-info text-light ms-3 text-nowrap col" data-bs-toggle="modal" data-bs-target="#modalSalida">Horario Máximo de Salida</button>
            <button className="btn btn-info text-light ms-3 text-nowrap col" data-bs-toggle="modal" data-bs-target="#modalAtraccionesNo">Atracciones No Permitidas</button>
          </div>
          <div className="ms-3 row mb-3">
            <button className="btn btn-info text-light text-nowrap col" data-bs-toggle="modal" data-bs-target="#modalDistancia">Distancia Máxima entre Atracciones</button>
            <button className="btn btn-info text-light ms-3 text-nowrap col" data-bs-toggle="modal" data-bs-target="#modalAltura">Altura Mínima</button>
            <button className="btn btn-info text-light ms-3 text-nowrap col" data-bs-toggle="modal" data-bs-target="#modalAtraccionesSi">Atracciones Obligatorias</button>
          </div>
          <div className="ms-3">
            <p>No tiene restricciones para su viaje</p>
            <ul id="listaRestricciones">
            </ul>
          </div>
          <div className="modal fade modalAdicionales" id="modalEntrada" tabindex="-1" aria-labelledby="modalEntradaLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-dark">
                <div className="modal-header">
                  <h5 className="modal-title" id="emodalEntradaLabel">Titulo</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Cuerpo
                            </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade modalAdicionales" id="modalSalida" tabindex="-1" aria-labelledby="modalSalidaLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-dark">
                <div className="modal-header">
                  <h5 className="modal-title" id="emodalSalidaLabel">Titulo</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Cuerpo
                            </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade modalAdicionales" id="modalAtraccionesNo" tabindex="-1" aria-labelledby="modalProhibidasLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-dark">
                <div className="modal-header">
                  <h5 className="modal-title" id="modalProhibidasLabel">Titulo</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Cuerpo
                            </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade modalAdicionales" id="modalDistancia" tabindex="-1" aria-labelledby="modalDistanciaLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-dark">
                <div className="modal-header">
                  <h5 className="modal-title" id="emodalDistanciaLabel">Titulo</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Cuerpo
                            </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade modalAdicionales" id="modalAltura" tabindex="-1" aria-labelledby="modalAlturaLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-dark">
                <div className="modal-header">
                  <h5 className="modal-title" id="emodalAlturaLabel">Titulo</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Cuerpo
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade modalAdicionales" id="modalAtraccionesSi" tabindex="-1" aria-labelledby="modalObligatoriasLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content bg-dark">
                <div className="modal-header">
                  <h5 className="modal-title" id="emodalObligatoriasLabel">Titulo</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  Cuerpo
                                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="mt-3">
          <button type="submit" className="btn btn-success mt-5 ms-3 mb-3"> Siguiente</button>
          <Link to="/miviaje/2">
            <button type="button" className="btn btn-dark mt-5 ms-3 mb-3"> Atrás</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(MiViajeAdicionales);