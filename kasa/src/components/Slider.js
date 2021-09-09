import {Component} from 'react'

export default class Slider extends Component {

    constructor(props){
        super(props)
        this.state = {
            isOpened: false
        }
    }

    renderDescription(){
        if(this.state.isOpened){
            return <div>
                <p className ="description-text-accordeon">{this.props.description}</p>
            </div>
        }
        return null;
    }


    render(){
        return <div className="accordeon">
        <div className={"about-Details"} onClick={() => this.setState({ isOpened: !this.state.isOpened })}>
            <p>{this.props.title}</p>
            <img src="./media/Arrow.png" alt="fleche tournante" className={this.state.isOpened ? 'opened' : ''} />
        </div>
        {this.renderDescription()}
    </div>
    }
}