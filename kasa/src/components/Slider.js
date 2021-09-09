import {Component} from 'react'
import LogementDetails from '../pages/LogementDetails';

export default class Slider extends Component {

    constructor(props){
        super(props)
        this.state = {
           logementData : {} 
        }
    }

   

    render(){

        const { logement } = this.props;

        console.log(logement.pictures)
       

        return <div className="slider">
                    <div className={"img-slider"}>
                        <img src="./media/fleche-right.png" alt="fleche next" />
                        <img src="./media/fleche-left.png" alt="fleche preview" />
                        {logement.pictures.map((element , index)=> {
                            return  <img src={element} alt="image appartement" />
                        })}
                    </div>
                </div>
    }
}