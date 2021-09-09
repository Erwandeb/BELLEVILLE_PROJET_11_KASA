import {Component} from 'react';
import { Link } from 'react-router-dom';


export default class Cover extends Component{
    
    render(){
      
        
        const { logement } = this.props


        return(
            <div className="cover-appartementDetails">
                <div className ="img-cover-appartementDetails">
                    <img src={logement.cover} alt={logement.title} label={logement.title}/>
                </div>
            </div>
        )
    }
}

