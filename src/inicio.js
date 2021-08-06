import React from 'react';

import * as f from "./functions"

export default class Inicio extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	componentDidMount() {
		fetch(f.apiLink("index",{extend:""}))
			.then(resp => resp.json())
			.then(data => {
				this.setState({ response: data.response })
			});
	}

	render() {
		return (
			<>
      <f.Sidebar content={<p>Hola!</p>} title="Sidebar"/>
				{!this.state.response ? "Cargando..." : ""}
				<div className="card-group">
					{this.state.response && this.state.response.map((a, b) => {
						return (<div className="card bg-dark mb-3">
							<img class="card-img-top" src={a.image} alt="{a.name}"></img>
							<div className="card-img-overlay">
								<h5 className="card-title">{a.id}: {a.name}</h5>
							</div>
						</div>
						);
					})}
				</div>
			</>
		)
	}
}