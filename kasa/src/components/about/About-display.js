import {Component} from 'react';
import Accordeon from '../Accordeon';

class Aboutdisplay extends Component {
 
    constructor(props) {
        super(props);
        this.state = { 
            isLoaded : false,
        };
    }

    componentDidMount(){
        
    }
    
    render(){
        
       
        const btnToDisplay = document.querySelectorAll(".about-Details");
        const displayText = (btn) => {btn.style.display ="block"};
        btnToDisplay.forEach(btn => btn.addEventListener('click', displayText()) );
       

        return(
            this.state.isLoaded ? 
            (   
            <div className="wrapper-about">
            {
                this.props.details.map( item => 
                    <Accordeon 
                        title={item.value}
                        description={item.text}
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
                    />
                )
            }
            </div>
        )
         
        )
    }
}

export default Aboutdisplay;
