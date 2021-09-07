import {Component} from 'react';
import Footer from '../components/Footer';
import Cover from '../components/logement/Cover';
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
        .then((result) => { console.log("testing result", result)
            this.setState({logementData : this.props })}
              
            );
    }
    
    render(){
        console.log("valeur des props :",  this.props.match.params)
        console.log("valeur des props2 :", this.props  )
        const { logementData } = this.props;
       
        console.log(" variable logementData",logementData)

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