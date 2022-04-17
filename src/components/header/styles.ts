import styled, {css} from 'styled-components';
import {shade} from 'polished';
import logoM from '../../assets/images/logo.png';
import logoMColored from '../../assets/images/logo.png';
import {animated} from 'react-spring';

interface PropsMenuBar{
    ishandled: boolean;
}


export const Header = styled.header`
    position: fixed;
    background: transparent;
    display: flex;
    width: 100%;
    height: 100px;
    top: 0;
    left: 0;
    align-items:center;
    justify-content: center;
    z-index: 1;

    .logoText {  
    position: absolute;
    top: -3rem;
    left: 7rem;

      >img {
        width: 150px;
        height: auto;
      }
    }

    

    @media(max-width: 768px){
        height: 100px;
    }

`;


export const HeaderContent = styled.div<PropsMenuBar>`
    display:flex;
    width: 90%;
    max-width: 1140px;
    margin: auto;
    align-items: center;
    position: relative;
    justify-content: space-between;

    img {
        position: relative;
        top: -1rem;
    }
  

    nav{
        display: flex;

        a {
            font-family: 'Roboto', serif;
            font-weight: 400;
            cursor: pointer;
            padding: 1.6rem 2.4rem 1.6rem 0;
            color: #333;
            text-decoration: none;
            font-size: 2rem;

       
        }  

        a:last-child{
            padding-right: 0;
        } 

        a::after{
            content: '';
            display: block;
            width:0;
            height: 2px;
            background: #00bcd4;
            transition: width .3s;

        }

        a:hover::after{
            width: 100%;
            transition: width .3s;
        }
        
    }

    @media(max-width: 768px){
        nav{
            display: none;
        }

        svg{
            display: flex;
        }
        
    }

    @media(min-width: 769px){
        svg{
            display: none;
        }
    }


    ${props => props.ishandled && css`
        img{display: none;}
       

    `}

`;

export const MenuSectionOn = styled(animated.div)<PropsMenuBar>`
    display: none;
    
   

    ${props => props.ishandled && css`
        position: absolute;
        top: 0;
        left: 0;
        background-color: #161617;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        

    `};

  

    nav{
        display: flex;
        flex-direction: column;
        align-items: center;

        a {
            font-family: 'Poppins', serif;
            font-weight: 400;
            font-size: 3.4rem;
            cursor: pointer;
            color: #fff;
            margin-bottom: 20px;
            text-decoration: none;
       
        }  

        a:last-child{
            margin-bottom: 0;
        } 
    }

`;

export const ContainerIcons = styled.div`
    display: flex;
    margin-top: 50px;

    a{
        margin-right: 20px;
    }

    a:last-child{
        margin-right: 0;
    }

`;

export const Logo = styled.div`
    width: 90px;
    margin-top: 16px;
   
    @media(max-width: 768px){
        width: 75px;
        margin-top: 0;
        

    }

    img{
        width: 100%;
        cursor: pointer;
    }
    
    
    img:hover{
            ${shade(0.8, '#00bcd4')}
    }


`;