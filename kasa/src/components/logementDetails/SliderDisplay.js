import {Component} from 'react'


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
        
        let arrowRight =  <img src="../media/fleche-right.png" alt="fleche next" className="arrow-right" onClick={() => this.onNextSlide()} />
            if(logementData.pictures.length === 1){
                arrowRight = "";
            }
            
        return <div className="slider">
                    <div className="slider-window">
                        {arrowRight}
                        <img src="../media/fleche-left.png" alt="fleche preview" className="arrow-left" onClick={() => this.onPrevSlide()} />
                        <p className="length-indicatif">{this.state.currentImageIndex}/{length}</p>
                        <div className="slider-derouler" id="slider-derouler-id" style={{transform: `translateX(${-(this.state.currentImageIndex - 1) * 100}%)`}}>
                            {showImages}
                        </div>
                    </div>
                </div>
    }
}

export default SliderDisplay;