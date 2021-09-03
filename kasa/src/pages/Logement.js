import {Component} from 'react';
import Footer from '../components/Footer';
import Logo from '../components/logo';
import Navigation from '../components/Navigation';


class Logement extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            logementData:{},

        };
    }
    

    /*
    constructor(props) {
        super(props);
        this.state = {
        items: []
        };
    }
    */

    componentDidMount() {
        const { id } = this.props.match.params

        fetch(`http://localhost:3000//annonces.json?id=${id}`)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                 logementData : result?.appartementData});
            },
            )
    }
    
    render(){
        console.log("test 1",this.props.match)
        console.log("Test 2",this.props)
        const { id } = this.props.match.params
        const { title  } = this.props.match.params


        const { logementData } = this.state
        
        

        return(
            <div className="home">
                <Logo />
                <Navigation />
                <div><h1>test: {id}</h1></div>
                <div><h1>test: {title}</h1></div>
                <Footer />
            </div>
        )
    }
}

export default Logement;