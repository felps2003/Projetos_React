import React from 'react';
import './App.css';

class Section extends React.Component{
    render(){
        return(
            <section className='newsletter'>
                <h3 className='tittleNewsletter'>Faça o seu cadastro</h3>
                <p>E receba as nossa promoções</p>
                <form method='post' className='formularioNew'>
                    <input type='text' placeholder='Digite seu nome' />
                    <input type='email' placeholder='Digite seu e-mail' />
                    <button className='btnCadastrar'>Cadastrar</button>
                </form>
            </section>
        )
    }
}
export default Section;