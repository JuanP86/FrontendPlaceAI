import React from 'react';
import { Line } from 'react-chartjs-2';
import { withRouter } from 'react-router';

import * as f from "./functions";

class Calendario extends React.Component {
	render() {
		return (
			<>
				<Chart park={this.props.match.params.park || null} />
			</>
		);
	}
}

export default withRouter(Calendario);

class Chart extends React.Component {
	constructor(props) {
		super(props);
		this.state = { current: props.park || "mk" };
	}
	componentDidMount() {
		fetch(f.apiLink("index")).then(resp => resp.json())
			.then(data => {
				this.setState({ parks: data.response })
			});
		if (this.state.current) this.listenerPark(true);
	}
	listenerPark = (useCurrent = false) => {
		let current = useCurrent !== true ? f.$("#selectPark").value : this.state.current;
		if (useCurrent !== true) this.setState({ current, rides: null });
		fetch(f.apiLink("rides", { park: current })).then(resp => resp.json())
			.then(data => {
				this.setState({ rides: data.response })
			})
	}
	/*listenerRide = () => {
		fetch(f.apiLink("waits/" + f.$("#selectRide").value)).then(resp => resp.json()).then(data => {
			this.setState({ waits: data.response.intervals })
		})
	}*/

	listenerDate = () => {
		fetch(f.apiLink("waits/" + f.$("#selectRide").value, { time: f.$("#selectDate").value })).then(resp => resp.json())
			.then(data => {
				this.setState({ waits: data.response.intervals })
			})
	}

	render() {
		let tiempos = [];
		for (let i = 0; i < 23; i++) tiempos[i] = Math.floor(Math.random() * (120 - 0)) + 0;
		let horas = [];
		for (let i = 0; i < 16; i++) horas[i] = 8 + i;
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
				<f.Sidebar title="Seleccionar">
					{!this.state.parks ? <div><div className="spinner-border" />Cargando parques...</div> : ""}
					<select id="selectPark" onChange={this.listenerPark} className="w-100 border-0 p-3 bg-secondary bg-gradient text-white fw-light" value={this.state.current}>
						{this.state.parks && this.state.parks.map((a, b) => {
							return (<option key={a.id} value={a.id} className="p-2">{a.name}</option>)
						})}
					</select>
					{!this.state.rides ? <div><div className="spinner-border" />Cargando atracciones...</div> : ""}
					<ul id="selectRide" className="nav flex-column">
						{this.state.rides && this.state.rides.map((a, b) => {
							return (<li key={a.id} value={a.id} className="m-2">{a.name}</li>)
						})}
					</ul>
				</f.Sidebar>
				<p><f.Icon name="heart-fill" className="text-success"/></p>
				<div>
					<input type="date" id="selectDate"></input>
				</div>
				<div className="container-sm">
					<Line data={data} options={options} />
				</div>
			</>
		);
	}
}