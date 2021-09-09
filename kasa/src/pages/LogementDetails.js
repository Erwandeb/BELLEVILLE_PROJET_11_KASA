import {Component} from 'react';
import Footer from '../components/Footer';
import CoverSlider from '../components/logementDetails/CoverSlider';
import Logo from '../components/logo';
import Navigation from '../components/Navigation';


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
                <CoverSlider logement = {logementData} />
                <Footer />
            </div>
        )
    }
}

export default LogementDetails;