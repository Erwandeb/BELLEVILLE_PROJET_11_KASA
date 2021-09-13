import {Component} from 'react';
import Rating from 'react-rating';


class starRating extends Component {



    render(){
        const { logementData } = this.props;
        
        console.log("test", logementData)    

        

        return(
            <div className="rating ">
                <Rating rating={this.props.rating}/>
            </div>
        )
    }
}

export default starRating;