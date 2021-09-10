import React from 'react';
import { Line } from 'react-chartjs-2';
import { withRouter } from 'react-router';

import * as f from "./functions";
import {Tooltip} from "bootstrap";


class Calendario extends React.Component {
	constructor(props) {
		super(props);
		this.state = { current: this.props.match.params.park || "mk" };
	}
	componentDidMount() {
		fetch(f.apiLink("parks")).then(resp => resp.json())
			.then(data => {
				this.setState({ parks: data.response.parks })
			});
		if (this.state.current) this.listenerPark(true);
		for (let el of f.$$('[title]')) new Tooltip(el);
	}
	listenerPark = (useCurrent = false) => {
		let current = useCurrent !== true ? f.$("#selectPark").value : this.state.current;
		if (useCurrent !== true) this.setState({ current, rides: null });
		fetch(f.apiLink("rides", { park: current })).then(resp => resp.json())
			.then(data => {
				this.setState({ rides: data.response })
			})
	}
	listenerRide = (el) => {
		if (f.$("#selectRide button.active")) f.$("#selectRide button.active").classList.remove("active");
		el.target.classList.add("active");
		this.listenerDate();
	}

	listenerDate = () => {
		if(!f.$("#selectRide button.active")) return;
		fetch(f.apiLink("waits/" + f.$("#selectRide button.active").getAttribute("data-value"), { date: f.$("#selectDate").value || null })).then(resp => resp.json()).then(data => {
			if(data.success) this.setState({ waits: data.response.waits, error: null });
			else this.setState({ waits: null, error: data.message });
		})
	}

	render() {
		let chart = <f.Alert type="primary">No hay datos para mostrar</f.Alert>;
		if (this.state.waits) {
			let data = this.state.waits.map(x=> x.wait >= 0 ? x.wait : 0);
			let labels = this.state.waits.map(x => x.time.split("T")[1].split(":",2).join(":"));
			chart = <Line data={{
				labels,
				datasets: [
					{
						label: 'Tiempo de espera',
						data,
						backgroundColor: 'rgb(13, 202, 240)',
						borderColor: 'rgb(13, 202, 240)',
					},
				],
			}} />;
		}
		let error = this.state.error ? <f.Alert type="danger">{this.state.error}</f.Alert> : null;
		return (
			<>
				<h3 className="d-inline">{this.state.current ? <span className="badge bg-info">{this.state.current}</span> : ""} {f.$("#selectRide button.active") ? f.$("#selectRide button.active").textContent : "Seleccione una atracción"}</h3>
				<f.Sidebar name={<f.Icon name="grid"/>} className="float-end" title="Seleccionar atracción">
					{!this.state.parks ? <div><div className="spinner-border" />Cargando parques...</div> : <select id="selectPark" onChange={this.listenerPark} className="w-100 border-0 p-3 bg-secondary bg-gradient text-white fw-light" value={this.state.current}>
						{this.state.parks && this.state.parks.map((a, b) => {
							return (<option key={a.id} value={a.id} className="p-2">{a.name}</option>)
						})}
					</select>}
					{!this.state.rides ? <div><div className="spinner-border" />Cargando atracciones...</div> : <ul id="selectRide" className="nav flex-column nav-pills">
						{this.state.rides && this.state.rides.map((a, b) => {
							return (<button key={a.id} data-value={a.id} className="nav-link text-white" onClick={this.listenerRide}>{a.name}</button>)
						})}
					</ul>}
				</f.Sidebar>
				<input type="date" id="selectDate" className="btn btn-primary float-end me-2" defaultValue={new Date().toISOString().split("T")[0]} onChange={this.listenerDate} title="Seleccionar fecha"></input>
        {error}
				{chart}
			</>
		);
	}
}

export default withRouter(Calendario);