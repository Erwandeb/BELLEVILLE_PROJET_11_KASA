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
        console.log('logement data  ', logementData)
        const length = logementData.pictures.length;
        const current = 0;
        let counter = 1;

        const sliderDerouler = document.getElementById('slider-derouler-id');
        console.log("sliderDerouler", sliderDerouler)
        
        function nextSlide(){
            sliderDerouler.style.transform ='translateX('+(-counter)+'px)';
            counter++;
        }

        function prevSlide(){
            sliderDerouler.style.transform ='translateX('+(-10*counter)+'px)';
            counter--;
        }

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
                        <img src="../media/fleche-right.png" alt="fleche next" className="arrow-right" />
                        <img src="../media/fleche-left.png" alt="fleche preview" className="arrow-left" />
                        <p className="length-indicatif">{current}/{length}</p>
                        <div className="slider-derouler" id="slider-derouler-id">
                            {showImages}
                        </div>
                    </div>
                </div>
    }
}

export default SliderDisplay;