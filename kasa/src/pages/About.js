import {Component} from 'react';
import AboutMainText from '../components/about/About-main-text';
import BackgroundAbout from '../components/about/Background-About';
import Footer from '../components/Footer';
import Logo from '../components/logo';
import Navigation from '../components/Navigation';

class About extends Component {
    render(){
        return(
            <div className="about">
                <Logo />
                <Navigation />
                <BackgroundAbout/>
                <AboutMainText />
                <Footer />
            </div>
        )
    }
}

export default About;