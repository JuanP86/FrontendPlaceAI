import React from 'react';
import * as f from './functions'

export default class ViajesUsuario extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        return(
            <>
            <div>
                <h2 className="ms-3 mt-3"><strong>¿A dónde querés ir hoy, Juan Alcachofa?</strong></h2>
                <hr />
            </div>
            <div>
                <f.Alert type="info"><f.Icon name="briefcase-fill" /> Mi Viaje a Orlando <button type="button" className="btn btn-secondary ms-3">Ver</button></f.Alert>
            </div>
            </>
        )
    }
}