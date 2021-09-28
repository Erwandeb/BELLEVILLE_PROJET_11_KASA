import {Component} from 'react';
import backgroundHome from '../../public/media/IMG.png';

class BackgroundHome extends Component {
    render(){
        return(
            <div className="background-home">
                <div className ="img-window-home">
                    <img src={backgroundHome} alt="Background de la page home" />
                </div>
                <div className="slogan-home">
                    <p> Chez vous, partout et ailleurs</p>
                </div>
            </div>
        )
    }
}

export default BackgroundHome;