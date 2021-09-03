import {Component} from 'react';
import { Link } from 'react-router-dom';


export default class Card extends Component{
    
    render(){
        console.log(this.props)
        return(
            <div className="appartement">
                <div className ="appartement-window">
                   <p>{this.props.logement.title}</p>
                   <Link to={`/logement/${this.props.logement.title}`}><img src={this.props.logement.cover} alt={this.props.logement.title}/></Link>
                </div>
            </div>
        )
    }
}

