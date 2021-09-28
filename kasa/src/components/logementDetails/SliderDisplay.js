import {Component} from 'react'
import flecheLeft from '../../src/media/fleche-left.png';
import flecheRight from '../../src/media/fleche-right.png';


class SliderDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            currentImageIndex: 1
        };
    }

    onNextSlide(){
        const { logementData } = this.props;
        if(this.state.currentImageIndex === logementData.pictures.length)
            this.setState({currentImageIndex: 1})
        else
            this.setState({currentImageIndex: this.state.currentImageIndex + 1})

    }

    onPrevSlide(){
        const { logementData } = this.props;
        if(this.state.currentImageIndex === 1)
            this.setState({currentImageIndex: logementData.pictures.length})
        else
            this.setState({currentImageIndex: this.state.currentImageIndex - 1})

    }


    render(){

        const { logementData } = this.props;
        const length = logementData.pictures.length;
    
        // Affichage des photos
        let showImages;
        if(logementData){
            showImages = logementData.pictures.map((photo) => {
                return <img src={photo} alt={photo} key={photo} className="imageSlider"/>
            })    
        } else{
            showImages = "loading"
        }
        
        //Affichages des flèches
        let arrowRight =  <img src={flecheRight} alt="fleche next" className="arrow-right" onClick={() => this.onNextSlide()} />
            if(logementData.pictures.length === 1){
                arrowRight = "";
            }

        let arrowLeft =  <img src={flecheLeft} alt="fleche previous" className="arrow-left" onClick={() => this.onPrevSlide()} />
            if(logementData.pictures.length === 1){
                arrowLeft = "";
            }
        
            
        return <div className="slider">
                    <div className="slider-window">
                        {arrowRight}
                        {arrowLeft}
                        <p className="length-indicatif">{this.state.currentImageIndex}/{length}</p>
                        <div className="slider-derouler" id="slider-derouler-id" style={{transform: `translateX(${-(this.state.currentImageIndex - 1) * 100}%)`}}>
                            {showImages}
                        </div>
                    </div>
                </div>
    }
}

export default SliderDisplay;