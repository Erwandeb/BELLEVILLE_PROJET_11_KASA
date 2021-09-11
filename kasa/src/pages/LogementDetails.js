import {Component} from 'react';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Logo from '../components/logo';
import Navigation from '../components/Navigation';
import AboutLogement from '../components/logementDetails/AboutLogement';
import LogementDetailsWrapper from '../components/logementDetails/LogementDetailsWrapper';


class LogementDetails extends Component {
   
    constructor(props) {
        super(props);
        this.state = { logementData : {} };
    }
    
    componentDidMount() {
        const { id } = this.props.match.params
        
        fetch(`http://localhost:3000//annonces.json`)
        .then(res => res.json())
        .then((result) => {
            this.setState({logementData : result.find((annonce) => annonce.id === id ) })}
        );
    }
    
    render(){
        const { logementData } = this.state;
        console.log(logementData);
        return(
            
            <div className="home">
                <Logo />
                <Navigation />
                <Slider logementData = {logementData} />
                <AboutLogement logementData = {logementData} />
                <LogementDetailsWrapper logementData = {logementData} />
                <Footer />
            </div>
        )
    }
}

export default LogementDetails;