import {Component} from 'react';



export default class AboutLogement extends Component{
    
    render(){
        const { logement } = this.props;
        return(

            <div className="about-corpus">

                <div className="about-logement">
                    <div className ="Logement-title-and-location">
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                    </div>
                    <div className ="tags-logement">
                        {logement.tags.map((tags)=> {
                            return <p className="tags" key={tags}> {tags}</p>
                        })}
                    </div>
                </div>

                <div className="about-host">
                    <div className="name-and-profilPicture">
                        <p key={logement.host.name}>{logement.host.name}</p>
                        <img key={logement.host.picture} src={logement.host.picture} alt ={logement.host.picture} />
                    </div>
                    <div className="rating">

                    </div>
                </div>
            </div>
        )
    }
}