import {Component} from 'react'




class SliderDisplay extends Component {


    render(){

        const { logementData } = this.props;
      
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
                        <img src="../media/fleche-right.png" alt="fleche next" className="arrow-right"/>
                        <img src="../media/fleche-left.png" alt="fleche preview" className="arrow-left"/>
                        {showImages}
                    </div>
                </div>
    }
}

export default SliderDisplay;