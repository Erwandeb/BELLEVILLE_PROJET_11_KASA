import {Component} from 'react';
import Footer from '../components/Footer';
import BackgroundHome from '../components/home/Background-home';
import GridHomePage from '../components/home/Grid-homePage';
import Logo from '../components/logo';
import Navigation from '../components/Navigation';

class Home extends Component {
    render(){
        return(
            <div className="home">
                <Logo />
                <Navigation />
                <BackgroundHome />
                <GridHomePage />
                <Footer />
            </div>
        )
    }
}

export default Home;