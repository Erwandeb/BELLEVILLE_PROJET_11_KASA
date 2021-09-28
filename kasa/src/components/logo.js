import {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../public/logo_kasa.png';

class Logo extends Component {
    render(){
        return(
            <div className="logo">
                <Link to={`/home`}> <img src={logo} alt="logo de kasa"/></Link>
            </div>
        )
    }
}

export default Logo;