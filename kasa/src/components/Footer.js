import {Component} from 'react';
import logoNB from '../public/logo_kasa_white.png';

class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <div className ="logoFooter">
                    <img src={logoNB} alt="logo de kasa" />
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>
        )
    }
}

export default Footer;