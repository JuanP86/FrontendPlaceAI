import React from 'react';
import algo from './fetcheadisimolince.json';
import {
    Link
} from "react-router-dom";
import { withRouter } from 'react-router-dom';

class MiVIajeDiasXPark extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount() {

    }

    submitForm(e) {
        e.preventDefault()
        this.props.history.push('/miviaje_3');
    }

    render() {
        return (
            <div>
                <div>
                    <h2 className="ms-3 mt-3"><strong>Dias Por Parque</strong></h2>
                    <hr style={{
                        marginLeft: 10,
                        marginRight: 10
                    }} />
                    <form className="needs-validation" onSubmit={this.submitForm.bind(this)}>
                        <div className="card-group ms-3 mt-3 me-3">
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="card bg-dark mb-3">
                                    <img class="card-img-top" src="images/Walt-Disney-MAgic-Kingdom-img.jpg" alt="Card image cap" style={{
                                        height: 250
                                    }}></img>
                                    <div className="card-img-overlay">
                                        <h5 className="card-title text-dark">Magic Kingdom</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-floating">
                                            <input type="number" required min="0" id="DiasMK"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-dark mb-3">
                                    <img className="card-img-top" src={algo.img.HS} alt="Card image cap" style={{
                                        height: 250
                                    }} />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title text-dark">Hollywood Studios</h5>
                                    </div>
                                    <div class="card-body">
                                        <div className="form-floating">
                                        <input type="number" required min="0" id="DiasHS"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-dark mb-3">
                                    <img className="card-img-top" src={algo.img.AI} alt="Card image cap" style={{
                                        height: 250
                                    }} />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title text-dark">Islands of Adventure</h5>
                                    </div>
                                    <div class="card-body">
                                    <div className="form-floating">
                                        <input type="number" required min="0" id="DiasAI"></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default withRouter(MiVIajeDiasXPark);