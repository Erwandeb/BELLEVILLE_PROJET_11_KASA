import {Component} from 'react';

class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <div className ="logoFooter">
                    <img src="../logo_kasa_white.png" alt="logo de kasa" />
                    <p>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>
        )
    }
}

export default Footer;