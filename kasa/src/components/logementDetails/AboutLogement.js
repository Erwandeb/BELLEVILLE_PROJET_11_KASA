import {Component} from 'react';



class AboutLogement extends Component {
    render(){
        const { logement } = this.props;
        /*
        const testing = logement.map((detail)=> { 
            return <p className="tags" key={`tags-${detail.tags}`}>{detail.tags}</p>
        })
    
        console.log('testing', testing)

        */ 
        return(

            <div className="about-corpus">

                <div className="about-logement">
                    <div className ="Logement-title-and-location">
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                    </div>
                    <div className ="tags-logement">
                    
                    </div>
                </div>

                <div className="about-host">
                    <div className="name-and-profilPicture">
                        <p key={logement.host.name}>{logement.host.name}</p>
                        <img key={logement.host.picture} src={logement.host.picture} alt ={logement.host.picture} />
                    </div>
                    <div className="rating">
                        <h1>hello</h1>
                    </div>
                </div>

            </div>
        )
    }
}

export default AboutLogement;