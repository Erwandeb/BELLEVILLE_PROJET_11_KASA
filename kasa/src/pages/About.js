import {Component} from 'react';
import Footer from '../components/Footer';
import Logo from '../components/logo';
import Navigation from '../components/Navigation';

class About extends Component {
    render(){
        return(
            <div className="about">
                <Logo />
                <Navigation />
                <Footer />
            </div>
        )
    }
}

export default About;