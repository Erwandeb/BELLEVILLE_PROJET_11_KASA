import {Component} from 'react';
import Card from './Card';




class GridHomePage extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            error : null,
            isLoaded :false,
            items: [] 
        };
    }


    componentDidMount() {
        fetch(`http://localhost:3000//annonces.json`)
        .then(res => res.json())
        .then( 
            (result) => {this.setState({
                isLoaded:true, 
                items: result 
            });
        },
            (error) => {this.setState({
                isLoaded: true, 
                error});
            }
        )
    }
      


    render() {
      
        const { error, isLoaded, items } = this.state;
        console.log("test", items)

        if (error) {
        return <div>Erreur !</div>;
        } else if (!isLoaded) {
        return <div>Chargement…</div>;
        } else {
        
        return (
            <div className="logements">
                <div className ="logement-list">
                    {items.map(logement => (
                        <Card 
                        logement = { logement } 
                        key = { logement.id }
                        />
                    ))}
                </div>
            </div>
          );
        }
    }

}

export default GridHomePage;