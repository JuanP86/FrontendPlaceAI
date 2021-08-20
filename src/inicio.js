import React from 'react';
import { Link } from "react-router-dom";

import * as f from "./functions";
import {Tooltip} from "bootstrap";


export default class Inicio extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		for (let el of f.$$('[title]')) new Tooltip(el);
		fetch(f.apiLink("index", {extend: ""})).then(resp => resp.json())
			.then(data => {
				this.setState({ response: data.response })
			});
	}

	render() {
		return (
			<>
				{!this.state.response ? <div><div className="spinner-border" />Cargando parques...</div> : ""}
				<div className="row row-cols-3">
					{this.state.response && this.state.response.map((a, b) => {
						return (
						<div className="col shadow-lg" key={a.id}>
							<Link className="card bg-dark mb-3" to={"/calendario/"+a.id}>
								<img className="card-img-top" src={a.image} title={a.name} alt={a.name}></img>
								<div className="card-img-overlay">
									<div className="card-title bg-dark bg-gradient p-1 rounded">
										<h5 className="opacity-100 text-white mb-0">{a.name}</h5>
									</div>
								</div>
							</Link>
						</div>
						);
					})}
				</div>
			</>
		)
	}
}