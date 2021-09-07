import {Component} from 'react';
import Card from './Card';




class GridHomePage extends Component {
    
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }


    componentDidMount() {
        fetch(`http://localhost:3000//annonces.json`)
        .then(res => res.json())
        .then((result) => { this.setState({ items: result })},)
    }
    

    render() {
        const { items } = this.state;

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

 

export default GridHomePage;