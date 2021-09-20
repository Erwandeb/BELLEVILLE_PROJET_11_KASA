import {Component} from 'react';
import Accordeon from '../Accordeon';

class LogementDetailsWrapper extends Component {
 
    constructor(props) {
        super(props);
        this.state = { 
            isLoaded : false,
        };
    }

    render(){
        
        const {logementData} = this.props;

        // fonction bouton affichage 
        const displayText = (btn) => {
            btn.style.display ="block";
        }
        const btnToDisplay = document.querySelectorAll(".about-Details");
        btnToDisplay.forEach(btn => btn.addEventListener('click', displayText() ));
          
        return(
            this.state.isLoaded ? (
                <div className="wrapper-logement-details">
                <div className="wrapper-container">
                 <Accordeon 
                         title={"Description"}
                         description={logementData.description}
                     />
                     <Accordeon 
                         title={"Equipements"}
                         description={logementData.equipments.map((item)=> <li key={item}>{item}</li>)}
                     />
                 </div> 
             </div>
            )
            :
            (
                <div className="wrapper-logement-details">
                <div className="wrapper-container">
                 <Accordeon 
                         title={"Description"}
                         description={logementData.description}
                     />
                     <Accordeon 
                         title={"Equipements"}
                         description={logementData.equipments.map((item)=> <li key={item}>{item}</li>)}
                     />
                 </div> 
             </div>
            )
        )
    }
}

export default LogementDetailsWrapper;
