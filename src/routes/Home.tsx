import { toggleMenu } from '../components/Toggle';

import homeImg from '../images/homeImg.jpg';
import aboutImg from '../images/aboutImg.jpg'
import LinkedinImg from '../images/LinkedinImg.png';
import githubImg from '../images/githubImg.png'
import instaImg from '../images/instaImg.png';

import '../styles/global.scss'

export function Home(){
  return (
    
    <div>
        <div className="toggle" onClick={toggleMenu}></div>
         {/* pagina inicial    */}
            <section className="banner" id="home">
                <div className="imgSidebar">
                    <img src={ homeImg } alt='Logo home'/>
                </div>
                <div className="contentBox">
                    <h5 className="logoText">Meu_Portfolio</h5>
                    <div>
                        <h4><span>Olá</span>, meu nome é</h4>
                        <h2>Renato Oliveira</h2>
                        <h4>Sou um Desenvolvedor Web.</h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil laborum quas accusamus reiciendis dicta, repellat voluptates aut accusantium ut inventore expedita tenetur rerum nostrum sapiente. Ipsum voluptatum neque facilis ex.
                        Accusamus, consectetur incidunt. Saepe sapiente repudiandae harum suscipit quasi laboriosam iusto, aut molestiae enim culpa porro sed quae iure.</p>
                        <a href="#about" className="btn">Sobre mim</a>
                    </div>
                    {/* Imagens para contato linkedin, github, etc */}
                    <ul className="sci">
                        <li>
                            <a href= "https://www.linkedin.com/in/renato-silva-de-oliveira-078b4719b/" target="blank"><img src={ LinkedinImg } /></a>
                        </li>
                        <li>
                            <a href="https://github.com/Oliveira-Renato" target="blank"><img src={ githubImg } /></a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/renato.marvel/" target="blank"><img src={ instaImg } /></a>
                        </li>
                    </ul>
                </div>   
            </section>

            {/* Sessão Sobre */}
            <section className="about" id="about">
                <div className="title white">
                    <h2>Sobre mim</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="content">
                    <div className="textBx">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam natus amet in voluptatem cupiditate voluptatibus dignissimos rem perspiciatis. Nulla tempore rerum quasi voluptates quos quod eveniet consequuntur! Magnam, fugit excepturi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa enim quisquam magnam at libero voluptate recusandae eveniet labore architecto dolore consequatur accusantium doloremque fugiat veniam perferendis ab eum, quos maxime!<br/><br/>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe dicta quia natus odio atque aspernatur quam ex quod nemo fugit officiis amet, neque quidem? Ratione repudiandae rerum perferendis accusantium numquam.</p>
                    </div>
                    {/* Imagem pessoal da pagina sobre */}
                    <div className="imgBx">
                        <img src={ aboutImg } />
                    </div>
                </div>
            </section>

            {/* Sessão de habilidades */}
            <section className="skills" id="skills">
                <div className="title">
                <h2 >Minhas Habilidades</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                    <div className="skills-content">
                        <div className="column left">
                            <div className="text">Minhas <span className="hab">Habilidades</span> <span className="simbol">&</span> <span className="exp">Experiências</span></div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia officia, et provident soluta facere, cum non, nihil molestias quas eveniet natus assumenda similique optio. Officia cumque quasi sit ex nulla. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo nam aliquam possimus laboriosam enim animi, delectus voluptas est ullam sed deleniti dolorum voluptates dolorem tempore nobis. Cupiditate quas possimus. </p>
                        </div>
                {/* Habilidades e Experiencia | divs responsaveis pelas habilidades e niveis        */}
                        <div className="column right">
                            <div className="bars">
                                
                                <div>
                                    <p></p>
                                </div>
                                <div className="info">
                                    <span>HTML</span>
                                    <span>30%</span>
                                </div>
                                <div className="line html"></div>
                            </div>
                            <div className="bars">
                                <div className="info">
                                    <span>CSS</span>
                                    <span>35%</span>
                                </div>
                                <div className="line css"></div>
                            </div>
                            <div className="bars">   
                                <div className="info">
                                    <span>JavaScript</span>
                                    <span>20%</span>
                                </div>
                                <div className="line js"></div>
                            </div> 
                            <div className="bars">  
                                <div className="info">
                                    <span>MySQL</span>
                                    <span>30%</span>
                                </div>
                                <div className="line sql"></div>
                            </div>
                            <div className="bars"> 
                                <div className="info">
                                    <span>Java</span>
                                    <span>25%</span>
                                </div>
                                <div className="line java"></div>
                            </div>
                        </div>
                    </div>
            </section>

            {/* Formulario Contato */}
            <section className="contact" id="cantact">
                <div className="title white">
                    <h2>Entre em Contato</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolores cumque voluptatum doloremque maxime quidem obcaecati, delectus minima soluta similique cupiditate porro debitis.</p>
                </div>
                    <div className="contactForm">
                        <div className="row">
                            <div className="col50">
                                <input type="text" name="" placeholder="Primeiro Nome" />
                            </div>
                            <div className="col50">
                                <input type="text" name="" placeholder="Sobrenome" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col50">
                                <input type="text" name="" placeholder="Email" />
                            </div>
                            <div className="col50">
                                <input type="text" name="" placeholder="Assunto" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col100">
                                <textarea placeholder="Digite aqui..."></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col100">
                                <input type="submit" value="Enviar" />
                            </div>
                        </div>
                    </div>
            </section>
            
            {/* <-----------Opções do menu ----------------> */}
            <div className="sidebar">
                <ul className="menu">
                    <li>
                        <a href="#home" onClick={ toggleMenu }>Início</a>
                    </li>
                    <li>
                        <a href="#about" onClick={ toggleMenu }>Sobre</a>
                    </li>
                    <li>
                        <a href="#skills" onClick={ toggleMenu }>Habilidades</a>
                    </li>
                    <li>
                        <a href="#" onClick={ toggleMenu }>Projetos</a>
                    </li>
                    <li>
                        <a href="#cantact" onClick={ toggleMenu }>Contato</a>
                    </li>
                </ul>
            </div>
    </div>
  );
}