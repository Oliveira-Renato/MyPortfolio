import { toggleMenu } from '../components/toggle/Toggle';

import homeImg from '../images/homeImg.jpg';
import aboutImg from '../images/aboutImg.jpg';
import LinkedinImg from '../images/LinkedinImg.png';
import githubImg from '../images/githubImg.png'
import instaImg from '../images/instaImg.png';
import mySelf from '../images/myself.jpeg';


import '../styles/global.scss';
import '../styles/media.scss';
import { Button } from '../components/button';
import { Projects } from '../components/projects';

import toast, { Toaster } from 'react-hot-toast';

import { FormEvent, useState } from 'react';
import { useForm } from '@formspree/react';


type InputsContent = {
    name?: string | undefined,
    lastname?:string| undefined,
    email?: string | undefined,
    subject?: string | undefined,
    message?: string | undefined
}



export function Home(){
    const [inputs, setInputs] = useState<InputsContent[]>([]);

    const HandleCleanInputs = () => {
        // //código temporário, preciso resolver como fazer isso de maneira mais elegante
         var campos= document.querySelectorAll('input')
         var textArea= document.querySelectorAll('textarea')

         for (let i = 0;i <= campos.length-1; i++) {
                 campos[i].value = '';     
             }
         if(textArea[0].value != '') {
                 textArea[0].value = '';
         }

         setInputs([])
    }


    function HandleInputChange(event: any) {
        inputs[event.target.name] = event.target.value;

        setInputs(inputs)
    }
 

    async function HandleSubmitForm(e: FormEvent){
        e.preventDefault()

        const data = Object.entries(inputs).map(([key,value]) =>{ 
            return {
                [key]: value,
            }
        })
    
       const dataObj:object = {
            name: data[0]?.name,
            lastname: data[1]?.lastname,
            email: data[2]?.email,
            subject: data[3]?.subject,
            message: data[4]?.message   
       }
        

       try{
           let response = await fetch("https://formspree.io/f/mgedorwa", {
               method: "POST",
               headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
                body: JSON.stringify(dataObj),
           });

           let result = await response.json();
           
           if(result.ok){
                setTimeout(function(){
                    toast.success('Enviado com sucesso!',
                    {
                        icon: '👍',
                        style: {
                            background: '#00bcd4',
                            color: '#fff',
                            width: '300px',
                            fontSize: '1.6em',
                        },
                    })
                },2000)

                HandleCleanInputs();
               
           }else{
                toast.error("Oops, Algo deu errado!", 
                {
                    icon: '😱',
                    style: {
                    width: '300px',
                    background: '#EF2A2A',
                    color: '#fff',
                    fontSize: '1.6em',
                    },
                })

                HandleCleanInputs()
           }
       }catch(err){
            console.log("ERRO: " + err)
       }        

    }
    


  return (
    
    <div>
        <div><Toaster/></div>
        <div className="toggle" onClick={toggleMenu}></div>
         {/*pagina inicial*/}
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
                        <img src={ mySelf } />
                    </div>
                </div>
            </section>

            {/* Sessão de habilidades */}
            <section className="skills" id="skills">
                <div className="title black">
                <h2>Minhas Habilidades</h2>
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
                                    <span>45%</span>
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
                                    <span>Python</span>
                                    <span>30%</span>
                                </div>
                                <div className="line java"></div>
                            </div>
                        </div>
                    </div>
            </section>
            {/* Sessão Projetos */}
            <Projects />
            {/* <section className="project" id="project">
            <div className="title black">
                <h2>Meus Projetos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolores cumque voluptatum doloremque maxime quidem obcaecati, delectus minima soluta similique cupiditate porro debitis.</p>
                </div>
                <div className="container">
                <div className="carousel">
                    <div className="item a">A</div>
                    <div className="item b">B</div>
                    <div className="item c">C</div>
                    <div className="item d">D</div>
                </div>
                </div>
                <div className="next">Next</div>
                <div className="prev">Prev</div>
            </section> */}

            {/* Formulario Contato */}
            <section className="contact" id="contact">
                <div className="title white">
                    <h2>Entre em Contato</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolores cumque voluptatum doloremque maxime quidem obcaecati, delectus minima soluta similique cupiditate porro debitis.</p>
                </div>
                <form onSubmit={ HandleSubmitForm } id='main-form'>
                    <div className="contactForm">
                        <div className="row">
                            <div className="col50">
                                <label htmlFor="name"></label>
                                <input type="text" id="name" name="name" placeholder="Primeiro Nome"  onChange={ HandleInputChange } required/>
                            </div>
                            <div className="col50">
                                <label htmlFor="lastname"></label>
                                <input type="text" id="lastname" name="lastname" placeholder="Sobrenome" onChange={ HandleInputChange } />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col50">
                                <label htmlFor="email"></label>
                                <input type="text" id="email" name="email" placeholder="Email"  onChange={ HandleInputChange } required />
                            </div>
                            <div className="col50">
                                <label htmlFor="subject"></label>
                                <input type="text" id="subject" name="subject" placeholder="Assunto" onChange={ HandleInputChange } required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col100">
                                <label htmlFor="message"></label>
                                <textarea name='message' id="message" placeholder="Digite sua mensagem aqui..." onChange={ HandleInputChange } required ></textarea>
                            </div>
                        </div>
                    </div>
                
                    <div className="row">
                        <div className="col100 btn-da-massa">
                            <Button />
                        </div>
                    </div>
                </form>
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
                        <a href="#project" onClick={ toggleMenu }>Projetos</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={ toggleMenu }>Contato</a>
                    </li>
                </ul>
            </div>
    </div>
  );
}
