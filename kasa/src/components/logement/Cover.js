import {Component} from 'react';
import { Link } from 'react-router-dom';


export default class Cover extends Component{
    
    render(){
      
        const { id } = this.props.match.params
        return(
            <div className="cover-appartementDetails">
                <div className ="img-cover-appartementDetails">
                   <img src={this.props.logement.cover} alt={this.props.logement.title}/>
                </div>
            </div>
        )
    }
}

