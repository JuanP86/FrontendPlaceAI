import React from 'react';
import {
    Link
} from "react-router-dom";
import { withRouter } from 'react-router-dom';
import * as f from './functions';

class MiVIajeDiasXPark extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount() {
        fetch(f.apiLink("parks")).then(resp => resp.json())
            .then(data => {
                this.setState({ response: data.response })
            });
    }

    submitForm(e) {
        e.preventDefault()
        this.props.history.push('/miviaje/3');
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
                        {!this.state.response ? <div><div className="spinner-border" />Cargando parques...</div> : ""}
                        <div className="row row-cols-3">
                            {this.state.response && this.state.response.map((a, b) => {
                                return (
                                    <div className="col shadow-lg" key={a.id}>
                                        <div className="card bg-dark mb-3">
                                            <img className="card-img-top" src={a.image} title={a.name} alt={a.name}></img>
                                            <div className="card-img-overlay">
                                                <div className="card-title bg-dark bg-gradient p-1 rounded">
                                                    <h5 className="opacity-100 text-white mb-0">{a.name}</h5>
                                                </div>
                                                <div>
                                                    <input type="number" min="0"></input>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <button type="submit" className="btn btn-success mt-5 ms-3 mb-3"> Siguiente</button>
                        <Link to="/miviaje/1">
                            <button type="button" className="btn btn-dark mt-5 ms-3 mb-3"> Atrás</button>
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}
export default withRouter(MiVIajeDiasXPark);