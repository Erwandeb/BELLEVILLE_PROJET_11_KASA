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
                <div className="notFound-error">
                    <div className="container-notFound-text">
                        <h1>404</h1>
                        <p>Oups ! La page que vous demandez n'existe pas.</p>
                        <a href="https://erwandeb.github.io/BELLEVILLE_PROJET_11_KASA/"> Retournez sur la page d'accueil</a>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default NotFound;