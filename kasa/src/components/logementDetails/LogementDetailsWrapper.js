import {Component} from 'react';
import Accordeon from '../Accordeon';

class LogementDetailsWrapper extends Component {
 
    render(){
        
        const btnToDisplay = document.querySelectorAll(".about-Details")
      
        btnToDisplay.forEach(btn => btn.addEventListener('click', displayText()) )
       
        const displayText = (btn) => {
            btn.style.display ="block";
        }

      
        const {logementData} = this.props;
        console.log(logementData.description);


        return(
            <div className="wrapper-logement-details">
                {
                    logementData.map( item => 
                        <Accordeon 
                            title={"description"}
                            description={item.description}
                        />
                    )
                }
            </div>
        )
    }
}

export default LogementDetailsWrapper;
