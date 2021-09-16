import {Component} from 'react'


class SliderDisplay extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            currentImageIndex: 0
        };


    }

    render(){

        const { logementData } = this.props;
        console.log('logement data ? ', logementData)
        const length = logementData.pictures.length;
        const current = 0;
       
       
        
        const nextSlide = () => (current === length - 1 ? 0 : current + 1);
        const prevSlide = () => (current === 0 ? length - 1 : current - 1);
        
        console.log("length", length)
        console.log("current is", current)

        

        let showImages;
        if(logementData){
            showImages = logementData.pictures.map((photo) => {
                return <img src={photo} alt={photo} key={photo} className="imageSlider"/>
            })    
        } else{
            showImages = "loading"
        }
        
    

        
        return <div className="slider">
                    <div className="slider-window">
                        <img src="../media/fleche-right.png" alt="fleche next" className="arrow-right" onClick={nextSlide}/>
                        <img src="../media/fleche-left.png" alt="fleche preview" className="arrow-left" onClick={prevSlide} />
                        <div className="slider-derouler">
                            {showImages}
                        </div>
                        
                    </div>
                </div>
    }
}

export default SliderDisplay;