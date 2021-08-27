import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class MiViajeRevisar extends React.Component {
    constructor() {
        super();
        this.state = {}
    }
    componentDidMount() {

    }

    submitForm(e) {
        e.preventDefault()
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <div>
                    <h4 className="ms-3 mt-3"><strong>Últimos Toques</strong></h4>
                    <hr style={{
                        marginLeft: 10,
                        marginRight: 10
                    }} />
                </div>
                <div>
                    <p>¿Esta listo para crear su viaje?</p>
                    <Link to="">
                    <button type="submit" className="btn btn-success mt-5 ms-3 mb-3"> Siguiente</button>
                    </Link>
                    <Link to="/miviaje/3">
                        <button type="button" className="btn btn-dark mt-5 ms-3 mb-3"> Atrás</button>
                    </Link>
                </div>
            </div>
        );
    }

}
export default withRouter(MiViajeRevisar);