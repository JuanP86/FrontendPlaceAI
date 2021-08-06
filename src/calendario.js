import React from 'react';
import { Line } from 'react-chartjs-2';

import * as f from "./functions"

export default class Calendario extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	componentDidMount() {
	}

	render() {
		return (
			<div>
				<Chart />
			</div >
		);
	}
}

class Chart extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	componentDidMount() {
		fetch(f.apiLink("index")).then(resp => resp.json())
			.then(data => {
				this.setState({ parks: data.response })
			})
	}
	cambioParque = () => {
		fetch(f.apiLink("rides",{park:f.$("#parqueSelec").value})).then(resp => resp.json())
		.then(data => {
			this.setState({ rides: data.response })
		})
	}
	cambioAtraccion = () => {
		fetch(f.apiLink("waits/"+f.$("#atracSelec").value)).then(resp => resp.json()).then(data => {
			this.setState({ waits: data.response.intervals })
		})
	}

	cambioFecha = () => {
		fetch(f.apiLink("waits/"+f.$("#atracSelec").value, {time: f.$("#fechaSelec").value})).then(resp => resp.json())
		.then(data => {
			this.setState({ waits: data.response.intervals })
		})
	}

	render() {
		let tiempos = [];
		for (let i = 0; i < 23; i++) {
			tiempos[i] = Math.floor(Math.random() * (120 - 0)) + 0;
		}

		let horas = [];
		for (let i = 0; i < 16; i++) {
			horas[i] = 8 + i;
		}

		const data = {
			labels: horas,
			datasets: [
				{
					label: 'tiempos de espera de ese día',
					data: tiempos,
					fill: false,
					backgroundColor: 'rgb(255, 99, 132)',
					borderColor: 'rgba(255, 99, 132, 0.2)',
				},
			],
		};

		const options = {
			scales: {
				yAxes: [
					{
						ticks: {
							beginAtZero: true,
						},
					},
				],
			},
		};
		return (
			<>
				<div>
					<input type="date" id="fechaSelec">
					</input>
					<select id="parqueSelec" onChange={this.cambioParque}>
						<option defaultValue>Seleccione</option>
						{!this.state.parks ? <option disabled defaultValue>Cargando...</option> : ""}
						{this.state.parks && this.state.parks.map((a, b) => {
							return (<option key={a.id} value={a.id}>{a.name}</option>)
						})}
					</select>
					<select id="atracSelec" onChange={this.cambioAtraccion}>
						<option disabled defaultValue>Seleccione</option>
						{this.state.rides && this.state.rides.map((a, b) => {
							return (<option key={a.id} value={a.id}>{a.name}</option>)
						})}
					</select>
				</div>
				<div className="container-sm">
					<Line data={data} options={options} />
				</div>
			</>
		);
	}
}