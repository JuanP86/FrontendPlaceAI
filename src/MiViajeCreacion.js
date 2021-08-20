import React from 'react';
import {
    Link
} from "react-router-dom";
import { withRouter } from 'react-router-dom';

class MiViajeCreacion extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount() {
    }

    submitForm(e) {
        e.preventDefault()
        this.props.history.push('/miviaje/2');
    }

    render() {
        return (
            <div>
                <div>
                    <h2 className="ms-3 mt-3"><strong>Configurar</strong></h2>
                    <hr style={{
                        marginLeft: 10,
                        marginRight: 10
                    }} />
                    <form className="needs-validation" onSubmit={this.submitForm.bind(this)}>
                        <div className="form-floating ms-3 mb-3" style={{ marginRight: 700 }} id="miViajeContainer">
                            <input type="text" id="nombreViaje" className="form-control" placeholder="Mi Nuevo Viaje" required></input>
                            <label for="nombreViaje" className="text-dark">Nombre del Viaje</label>
                        </div>
                        <h4 className="ms-3">Cantidad de Personas</h4>
                        <div className="ms-3 mb-5" style={{ marginRight: 1050 }}>
                            <label for="cantidadNiños">Niños:</label>
                            <input type="number" className="form-control me-3 ms-2 mb-3" required id="cantidadNiños" min="0"></input>
                            <label for="cantidadAdultos">Adultos:</label>
                            <input type="number" className="form-control ms-2" required id="cantidadAdultos" min="0"></input>
                        </div>
                        <h4 className="ms-3">Desde</h4>
                        <div className="ms-3 mb-3" style={{ marginRight: 950 }}>
                            <input type="date" id="fechaInicio" className="form-control" required></input>
                        </div>
                        <h4 className="ms-3">Hasta</h4>
                        <div className="ms-3" style={{ marginRight: 950 }}>
                            <input type="date" id="fechaFin" className="form-control" required></input>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-success mt-5 ms-3 mb-3"> Siguiente</button>
                            <Link to="/miviaje">
                                <button type="button" className="btn btn-dark mt-5 ms-3 mb-3"> Atrás</button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(MiViajeCreacion);