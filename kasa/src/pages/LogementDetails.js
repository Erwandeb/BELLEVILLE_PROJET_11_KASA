import {Component} from 'react';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Logo from '../components/logo';
import Navigation from '../components/Navigation';
import AboutLogement from '../components/logementDetails/AboutLogement';
import Accordeon from '../components/Accordeon';


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

        return(
            
            <div className="home">
                <Logo />
                <Navigation />
                <Slider logement = {logementData} />
                <AboutLogement logement = {logementData} />
                <Footer />
            </div>
        )
    }
}

export default LogementDetails;