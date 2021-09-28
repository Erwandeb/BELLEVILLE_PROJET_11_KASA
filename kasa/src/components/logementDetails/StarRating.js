import {Component} from 'react';
import shortid from 'shortid';
import redStarImg from '../media/redStar.png';
import greyStarImg from '../media/emptyStar.png';


class StarRating extends Component {
       
    render(){

        const { rating } = this.props;
        const starRed = Array.from({length: rating}, (v, k) => <img src={redStarImg} alt="etoile rouge" className="stars" key={shortid.generate()}/>);
        const emptyStar = Array.from({length: 5-rating}, (v, k) => <img src={greyStarImg} alt="etoile grise" className="stars" key={shortid.generate()}/>);
        return(
            <div className="rating">
               {starRed}{emptyStar}
            </div>
        )
    }
}

export default StarRating;