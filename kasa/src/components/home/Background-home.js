import {Component} from 'react';

class BackgroundHome extends Component {
    render(){
        return(
            <div className="background-home">
                <div className ="img-window-home">
                    <img src="./media/IMG.png" alt="Background de la page home" />
                </div>
                <div className="slogan-home">
                    <p> Chez vous, partout et ailleurs</p>
                </div>
            </div>
        )
    }
}

export default BackgroundHome;