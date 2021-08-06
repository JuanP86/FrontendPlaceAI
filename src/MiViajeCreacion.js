import React from 'react';

export default class MiViajeCreacion extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount() {
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
                    <div className="form-floating ms-3 mb-3" style={{marginRight: 700}} id="miViajeContainer">
                        <input type="text" id="nombreViaje" className="form-control" placeholder="Mi Nuevo Viaje"></input>
                        <label for="nombreViaje" className="text-dark">Nombre del Viaje</label>
                    </div>
                    <h4 className="ms-3">Cantidad de Personas</h4>
                    <div className="ms-3 mb-5" style={{marginRight: 1050}}>
                        <label for="cantidadNiños">Niños:</label>
                        <input type="number" className="form-control me-3 ms-2 mb-3" required={true} id="cantidadNiños" min="0"></input>
                        <label for="cantidadAdultos">Adultos:</label>
                        <input type="number" className="form-control ms-2" required={true} id="cantidadAdultos" min="0"></input>
                    </div>
                    <h4 className="ms-3">Desde</h4>
                    <div className="ms-3 mb-3" style={{marginRight: 950}}>
                        <input type="date" id="fechaInicio" className="form-control"></input>
                    </div>
                    <h4 className="ms-3">Hasta</h4>
                    <div className="ms-3" style={{marginRight: 950}}>
                        <input type="date" id="fechaFin" className="form-control"></input>
                    </div>
                    <div>
                        <button type="button" className="btn btn-success mt-5 ms-3 mb-3"> Siguiente</button>
                        <button type="button" className="btn btn-dark mt-5 ms-3 mb-3"> Atrás</button>
                    </div>
                </div>
            </div>
        );
    }
}