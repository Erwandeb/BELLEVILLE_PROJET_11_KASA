import {Component} from 'react';
import { Link } from 'react-router-dom';


export default class Card extends Component{
    
    render(){
        const { logement } = this.props;
        return(
            <div className="appartement">
                <div className ="appartement-window">
                   <p>{logement.title}</p>
                   <Link key={`logement-${logement.id}`} to={`/logement/${logement.id}`}><img src={logement.cover} alt={logement.title}/></Link>
                </div>
            </div>
        )
    }
}

