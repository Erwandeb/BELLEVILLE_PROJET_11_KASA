import {Component} from 'react';
import Rating from 'react-rating';


class StarRating extends Component {
       
    constructor(props) {
        super(props);
        this.state = {
            rating : null,
        };
    }


    render(){
     
        const {rating} = this.props


        return(
            <div className="rating ">
                <Rating rating="2" />
            </div>
        )
    }
}

export default StarRating;