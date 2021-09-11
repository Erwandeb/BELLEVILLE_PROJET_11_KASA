import {Component} from 'react';



export default class Cover extends Component{
    
    render(){
        const { logementData } = this.props

        return(
            <div className="cover-appartementDetails">
                <div className ="img-cover-appartementDetails">
                    <img src={logementData.cover} alt={logementData.title} label={logementData.title}/>
                </div>
            </div>
        )
    }
}

