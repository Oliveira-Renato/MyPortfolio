import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoMColored from '../../assets/images/logo.png';
import '../../styles/global.scss'

import { 
    FiInstagram, 
    FiLinkedin, 
    FiGithub, 
    FiMenu 
} from 'react-icons/fi';

import { AiOutlineClose } from 'react-icons/ai';

import { Header, Logo, HeaderContent, MenuSectionOn, ContainerIcons } from './styles';

const HeaderComponent = () => {
    const [menuBar, setMenuBar] = useState(false);
    const [displayMenu, setDisplayMenu] = useState(false)
    const [toggle, set] = useState(false);;

    const handleMenuBar = () => {
        if(!menuBar){
            setMenuBar(true);
        }else{
            setMenuBar(false);
        }
    };
    
    const handleClickLink = () => {
        if(!displayMenu){
            setMenuBar(false);
        }else{
            setMenuBar(false);
        }
    };


    return(
        <Header>
            <MenuSectionOn  ishandled={menuBar} >
                    <nav>
                        <Link onClick={() => handleClickLink()} to="about" >About me</Link>
                        <Link onClick={() => handleClickLink()} to="services" >Services</Link>
                        <Link onClick={() => handleClickLink()} to="portfolio" >Portfólio</Link>
                        <Link onClick={() => handleClickLink()} to="contact" >Contact</Link>
                    </nav>
                    <ContainerIcons>
                        <a href="https://www.instagram.com/magalsz/">
                            <FiInstagram size={34} color="#e94b3cff"/>
                        </a>
                        <a href="https://www.linkedin.com/in/matheus-magalh%C3%A3es-araujo/">
                            <FiLinkedin size={34} color="#e94b3cff"/>
                        </a>
                        <a href="https://github.com/Magal97">
                            <FiGithub size={34} color="#e94b3cff"/>
                        </a>
                    </ContainerIcons>
            </MenuSectionOn>
            <HeaderContent ishandled={menuBar}>
                <Logo>
                    <Link to="home" >
                        {/* <img src={logoMColored} alt="logo"/> */}
                        </Link>
                </Logo>
                
                {menuBar ? <AiOutlineClose onClick={() => handleMenuBar()} size={36} color="#fff" />
                : <FiMenu onClick={() => handleMenuBar()} size={36} color="#fff"/>}
                    <nav>
                        <Link to="about" >Sobre</Link>
                        <Link to="services" >Habilidades</Link>
                        <Link to="portfolio" >Projetos</Link>
                        <Link to="contact" >Contato</Link>
                    </nav>
            </HeaderContent>
            
        </Header>
    )
}

export default HeaderComponent;