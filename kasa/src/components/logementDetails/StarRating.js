import {Component} from 'react';
import shortid from 'shortid';


class StarRating extends Component {
       
    render(){

        const { rating } = this.props;
        const starRed = Array.from({length: rating}, (v, k) => <img src="../media/redStar.png" alt="etoile rouge" className="stars" key={shortid.generate()}/>);
        const emptyStar = Array.from({length: 5-rating}, (v, k) => <img src="../media/emptyStar.png" alt="etoile grise" className="stars" key={shortid.generate()}/>);
        return(
            <div className="rating">
               {starRed}{emptyStar}
            </div>
        )
    }
}

export default StarRating;