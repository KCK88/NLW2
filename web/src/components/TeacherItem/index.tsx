import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import './styles.css'


function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/60490259?s=460&u=4b66d5991418569e2559347706f4b9cfd19fe7fd&v=4" alt="Claudio Meira"/>
                        <div>
                            <strong>Claudio Meira: </strong>
                            <span>Física</span>
                        </div>
                    </header>
                    <p>Professor licesiado pela USP <br/> Neste tópico você pode encontrar perguntas e respostas para algumas dúvidas que possam surgir à respeito da sua graduação. <br/> Este é um tópico dinâmico. Na medida em que novas perguntas foram surgindo elas serão listadas aqui com as respectivas respostas.</p>
                    <footer>
                        <p>
                            Preço/hora: 
                            <strong>R$ 55,00 </strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
}

export default TeacherItem;