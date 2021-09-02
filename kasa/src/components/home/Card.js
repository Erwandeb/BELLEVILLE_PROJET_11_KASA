import {Component} from 'react';



export default class Card extends Component{
    
    render(){
        console.log(this.props)
        return(
            <div className="appartement">
                <div className ="appartement-window">
                   <p>{this.props.logement.title}</p>
                   <img src={this.props.logement.cover} alt={this.props.logement.title}/>
                </div>
            </div>
        )
    }
}

