import {Component} from 'react'




class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
          current: 0,
          setCurrent :0
        };
      }


    render(){

        const { logementData } = this.props;
        console.log(logementData.pictures);

        
        let showImages;
        if(logementData){
            showImages = logementData.pictures.map((photo) => {
                return <img src={photo} alt={photo} key={photo} className="imageSlider"/>
            })    
        } else{
            showImages = "loading"
        }
        
        const length = logementData.pictures.length;

       console.log("before",this.state.current)

        const test = ()=> (this.state.current === length - 1 ? 0 : this.state.current +1);
       console.log("after",this.state.current)

        return <div className="slider">
                    <div className="slider-window">
                        <img src="./media/fleche-right.png" alt="fleche next" className="arrow-right" onClick={test()}/>
                        <img src="./media/fleche-left.png" alt="fleche preview" className="arrow-left"/>
                        {showImages}
                    </div>
                </div>
    }
}

export default Slider;