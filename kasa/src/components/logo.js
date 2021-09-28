import {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../media/logo.png';

class Logo extends Component {
    render(){
        return(
            <div className="logo">
                <Link to={`/`}> <img src={logo} alt="logo de kasa"/></Link>
            </div>
        )
    }
}

export default Logo;