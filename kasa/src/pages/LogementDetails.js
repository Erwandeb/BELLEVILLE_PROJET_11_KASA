import {Component} from 'react';
import Footer from '../components/Footer';
import Cover from '../components/logement/Cover';
import Logo from '../components/logo';
import Navigation from '../components/Navigation';


class LogementDetails extends Component {
   
    constructor(props) {
        super(props);
        this.state = { };
    }
    
    componentDidMount() {
        const { id } = this.props.match.params
        fetch(`http://localhost:3000//annonces.json?id=${id}`)
        .then(res => res.json())
        .then((result) => { this.setState({logementDetailsData : result}) });
    }
    
    render(){
        console.log("yooo",this.props)
        
        return(
            
            <div className="home">
                <Logo />
                <Navigation />
                
              
                <Footer />
            </div>
        )
    }
}

export default LogementDetails;