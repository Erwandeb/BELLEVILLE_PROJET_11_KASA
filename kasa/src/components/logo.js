import {Component} from 'react';
import { Link } from 'react-router-dom';

class Logo extends Component {
    render(){
        return(
            <div className="logo">
                <Link to={`/`}> <img src="../logo_kasa.png" alt="logo de kasa" /></Link>
            </div>
        )
    }
}

export default Logo;