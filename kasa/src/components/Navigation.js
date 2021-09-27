import {Component} from 'react';
import { NavLink } from "react-router-dom"

class Navigation extends Component {
    render(){
        return(
            <div className="navigation">
                <NavLink exact to ="/home" activeClassName ="nav-active">
                    Accueil
                </NavLink>
                <NavLink exact to ="/a-propos" activeClassName ="nav-active">
                    A propos
                </NavLink>
            </div>
        )
    }
}

export default Navigation;