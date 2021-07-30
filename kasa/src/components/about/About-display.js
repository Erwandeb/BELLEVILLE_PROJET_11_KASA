import {Component} from 'react';
import Accordeon from '../Accordeon';

class Aboutdisplay extends Component {
 




    render(){
        
        const btnToDisplay = document.querySelectorAll(".about-Details")
      
        btnToDisplay.forEach(btn => btn.addEventListener('click', displayText()) )
       
        const displayText = (btn) => {
            btn.style.display ="block";
        }

        return(
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
    }
}

export default Aboutdisplay;
