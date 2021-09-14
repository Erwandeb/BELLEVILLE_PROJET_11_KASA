import {Component} from 'react';



class StarRating extends Component {
       
    

    render(){
     
        const { logementData } = this.props;
        console.log(logementData)

        return(
            <div className="rating ">
               
            </div>
        )
    }
}

export default StarRating;