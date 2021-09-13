import {Component} from 'react';
import Footer from '../components/Footer';
import Slider from '../components/logementDetails/Slider';
import Logo from '../components/logo';
import Navigation from '../components/Navigation';
import AboutLogement from '../components/logementDetails/AboutLogement';
import LogementDetailsWrapper from '../components/logementDetails/LogementDetailsWrapper';


class LogementDetails extends Component {
   
    constructor(props) {
        super(props);
        this.state = { 
            logementData : {},
            error : null,
            isLoaded :false,
        };
    }
    
    componentDidMount() {
        const { id } = this.props.match.params
        
        fetch(`http://localhost:3000//annonces.json`)
            .then(res => res.json())
            .then((result) => {this.setState({
                isLoaded : true, 
                logementData : result.find((annonce) => annonce.id === id )} )
            },
            (error) => {this.setState({
                isLoaded: true, 
                error});
            }
        )
    }
    
    render(){
       
            const { error, isLoaded, logementData} = this.state;
            console.log(logementData);

            if (error) {
                return <div>Erreur !</div>;
                } else if (!isLoaded) {
                return <div>Chargement…</div>;
                } else {

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
}

export default LogementDetails;