import {Component} from 'react';
import Accordeon from '../Accordeon';

class Aboutdisplay extends Component {
 
    constructor(props) {
        super(props);
        this.state = { 
            isLoaded : false,
        };
    }

    render(){
        
        return(
            this.state.isLoaded ? 
            (   
            <div className="wrapper-about">
            {
                this.props.details.map( item => 
                    <Accordeon 
                        title={item.value}
                        description={item.text}
                        key={item.text}
                    />
                )
            }
            </div>
        ) :
        (
            <div className="wrapper-about">
            {
                this.props.details.map( item => 
                    <Accordeon 
                        title={item.value}
                        description={item.text}
                        key={item.text}
                    />
                )
            }
            </div>
        )
        )
    }
}

export default Aboutdisplay;
