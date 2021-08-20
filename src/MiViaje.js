import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import MiViaje_2 from './MiVIajeDiasXPark';
import MiViaje_1 from './MiViajeCreacion';
import MiViaje_3 from './MiViajeAdicionales';
import MiViaje_4 from './MiViajeRevisar';

import * as f from './functions';

class MiViaje extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <f.Sidebar>
                    <ul className="nav flex-column nav-pills">
                        <NavLink to="/miviaje/1"><li className="nav-link text-white">Creación</li></NavLink>
                        <NavLink to="/miviaje/2"><li className="nav-link text-white">Días por parque</li></NavLink>
                        <NavLink to="/miviaje/4"><li className="nav-link text-white">Revisar</li></NavLink>
                    </ul>
                </f.Sidebar>
                <Route path="/miviaje/1">
                    <MiViaje_1 />
                </Route>
                <Route path="/miviaje/2">
                    <MiViaje_2 />
                </Route>
                <Route path="/miviaje/3">
                    <MiViaje_3 />
                </Route>
                <Route path="/miviaje/4">
                    <MiViaje_4 />
                </Route>
            </>
        );
    }
}
//<NavLink to="/miviaje/3"><button className="nav-link text-white">Adicionales</button></NavLink>
export default withRouter(MiViaje);