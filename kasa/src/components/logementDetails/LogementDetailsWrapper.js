import {Component} from 'react';
import Accordeon from '../Accordeon';

class LogementDetailsWrapper extends Component {
 
    render(){
            
    


        // fonction bouton affichage 
        const btnToDisplay = document.querySelectorAll(".about-Details")
        btnToDisplay.forEach(btn => btn.addEventListener('click', displayText()) )
        const displayText = (btn) => {
            btn.style.display ="block";
        }
       
       
        const {logementData} = this.props;
        const {description} = logementData.description
        return(
            <div className="wrapper-logement-details">
                <Accordeon 
                    title={"description"}
                    description={description}
                />
            </div>
        )
    }
}

export default LogementDetailsWrapper;
