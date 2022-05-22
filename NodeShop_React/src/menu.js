import React from 'react';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";

class Menu extends React.Component{
    render(){
        return(
            <nav className='menu'>
                <ul>
                    <li className='list-item'><a href='#home'>Home</a></li>
                    <li className='list-item'><a href='#produtos'>Produtos</a></li>
                    <li className='list-item'><a href='#servicos'>Serviços</a></li>
                    <li className='list-item'><a href='#contatos'>Contatos</a></li>
                </ul>
                <div className='social-icons'>
                    <a href="" className="btn-linkedin"><FontAwesomeIcon icon={faGlobeEurope} /></a>
                    <a href="" className="btn-github"><FontAwesomeIcon icon={faGlobeEurope} /></a>
                    <a href="" className="btn-google"><FontAwesomeIcon icon={faGlobeEurope} /></a>
                </div>
            </nav>
        )
    }
}
export default Menu;