import {Component} from 'react';
import { Link } from 'react-router-dom';


export default class Card extends Component{
    
    render(){
        
        return(
            <div className="appartement">
                <div className ="appartement-window">
                   <p>{this.props.logement.title}</p>
                   <Link key={`logement-${this.props.logement.id}`} to={`/logement/${this.props.logement.id}`}><img src={this.props.logement.cover} alt={this.props.logement.title}/></Link>
                </div>
            </div>
        )
    }
}

