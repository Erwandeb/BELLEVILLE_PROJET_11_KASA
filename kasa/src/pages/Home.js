import {Component} from 'react';
import Footer from '../components/Footer';
import Logo from '../components/logo';
import Navigation from '../components/Navigation';

class Home extends Component {
    render(){
        return(
            <div className="home">
                <Logo />
                <Navigation />
                <Footer />
            </div>
        )
    }
}

export default Home;