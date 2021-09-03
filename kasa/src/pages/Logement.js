import {Component} from 'react';
import Footer from '../components/Footer';
import Logo from '../components/logo';
import Navigation from '../components/Navigation';

class Logement extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            instructors: [],
            instructorID : props.match.params.instructorID,
            title: []

        };
    }

    componentDidMount() {
        fetch("./annonces.json")
            .then(res => res.json())
            .then((result) => {
                this.setState({
                instructors: result.data
                });
            },
            
        )
    }
    

    render(){
        console.log("houga",this.props.match.description)
        console.log("yooo",this.props)
        console.log("testing",this.props.match)
     
        return(
            <div className="home">
                <Logo />
                <Navigation />
                
                <Footer />

            </div>
        )
    }
}

export default Logement;