import React from 'react';
import './App.css';
import loja from './img/loja.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMessage } from "@fortawesome/free-solid-svg-icons";




class Main extends React.Component{
    render(){
        return(
            <main className='principal'>
                <article className='sobre'>
                    <h2 className='sobreH2'>Sobre nos</h2>
                    <img src={loja} alt='NodeShop' />
                    <p className='textSobre'>Nos somos a NodeShop, também conhecida como loja do filho do professor Obama, estamos sempre procurando evoluir junto com os nossos clientes, sempre acompanhando a compra dele.</p>
                    <p className='textSobre'>Estamos buscando alcançar preços mais acessiveis para o mundo inteiro, com entregas totalmente online, dessa forma possibilitando o auxilio a pessoas que não podem chegar a nossa loja.</p>
                    <p className='textSobre'>Dessa forma a nossa empresa, esta com descontos totalmente incríveis, na primeira compra do cliente na nossa loja, ele já recebe um cupom de 30% de desconto em qualquer produto acima de 1000 reais.</p>
                    <p className='textSobre'>A NodeShop agradece a sua entrada na nossa loja, você já faz parte da nossa grande familia, estamos sempre ao seu lado.</p>
                </article>
                <aside className='onde-estamos'>
                    <h2 className='asideH2'>Onde nos encontramos</h2>
                    <p className='textAside'>Rua Tito N54 -Vila Romana-São Paulo-SP-Brasil</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.124281985649!2d-46.69399738435482!3d-23.52803196624888!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1647265549731!5m2!1spt-BR!2sbr"></iframe>
                    <h2 className='asideH2'>Contatos</h2>
                    <ul>
                        <li className='asideList'><FontAwesomeIcon icon={faPhone} />(11)93027-7955</li>
                        <li className='asideList'><FontAwesomeIcon icon={faMessage} />(11)93027-7955</li>
                        <li className='asideList'><FontAwesomeIcon icon={faEnvelope} />felypenunes1609@gmail.com</li>
                    </ul>
                </aside>
            </main>
        )
    }
}

export default Main;