import {Component} from 'react';
import Footer from '../components/Footer';
import Logo from '../components/logo';
import Navigation from '../components/Navigation';

class NotFound extends Component {
    render(){
        return(
            <div className="notFound">
                <Logo />
                <Navigation />
                <div className="404-error">
                    <h1>404</h1>
                    <p>Oups ! La page que vous demandez n'existe pas.</p>
                    <a href="http://localhost:3000/"> Retournez sur la page d'accueil</a>
                </div>
                <Footer />
            </div>
        )
    }
}

export default NotFound;