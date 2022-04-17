import { toggleMenu } from '../../components/toggle/Toggle';

import { AboutMe } from '../../routes/aboutMe/index'
 
import homeImg from '../../assets/images/homeImg.jpg';
import LinkedinImg from '../../assets/images/LinkedinImg.png';
import githubImg from '../../assets/images/githubImg.png'
import instaImg from '../../assets/images/instaImg.png';
import logo from '../../assets/images/logo.png';



import '../../styles/global.scss';
import '../../styles/media.scss';
import { Button } from '../../components/button';
import {Projects} from '../projects'

import toast, { Toaster } from 'react-hot-toast';

import { FormEvent, useState } from 'react';
import { Skills } from '../skills';
import HeaderContent from '../../components/header';
import HeaderComponent from '../../components/header';


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
        
        <HeaderComponent />
            {/*pagina inicial*/}
            <section className="banner" id="home">
                <div className="imgSidebar">
                    <img src={ homeImg } alt='Logo home'/>
                </div>
                <div className="contentBox">
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

           {/* Sessão Sobre mim */}
           <AboutMe />

            {/* Sessão de habilidades */}
            <Skills />

            {/* Sessão Projetos */}

            <Projects />
            
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
