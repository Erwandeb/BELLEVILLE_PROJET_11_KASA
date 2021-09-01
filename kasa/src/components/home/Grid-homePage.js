import {Component} from 'react';
import Appartement from './Appartement';

class GridHomePage extends Component {
    render(){
        return(
        
            <div className="GridHomePage">
                <div className="grid">
                    <Appartement />
                    <Appartement />
                    <Appartement />
                    <Appartement />
                    <Appartement />
                    <Appartement />
                    <Appartement />
                    <Appartement />
                </div>
            
            </div>
        )
    }
}

export default GridHomePage;