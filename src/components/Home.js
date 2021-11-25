import React from 'react';
import { Link  } from 'react-router-dom';
import Header from './Header';

class Home extends React.Component {
    componentDidMount(){
        let a = document.getElementById('title');
        a.innerHTML = 'Accueil'
      }
    render() { 
        return(
            <React.Fragment>
                <Header/>
                <section>
                    <div className="section home">
                        <ul>                         
                            <Link to="/ServiceID">
                                <li>Corriger Numéro Service ID</li>
                            </Link>  
                            <Link to="/IccID">                          
                                <li>
                                    Corriger Numéro ICCID
                                </li>
                            </Link>
                            <Link to="/FactID">
                                <li>
                                    Corriger Numéro Compte facturation
                                </li>
                            </Link>
                        </ul>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
 
export default Home;