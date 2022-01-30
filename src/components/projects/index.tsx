import '../../styles/media.scss'
import '../../styles/global.scss'
import './style.scss';
import $ from "jquery";

/*importação de imagens */
import  letmeAskImg  from "./images/letmeask/letmeaskmobi.jpeg"
import { useEffect } from 'react';

export function Projects(){
    var carousel: any = $(".carousel"), currdeg: number  = 0;

    useEffect(()=>{
      $('.a').addClass('lol')
    })
    function rotate(){
      console.log('deixa com pai')
      console.log(currdeg);

     carousel.css({
          "-webkit-transform": "rotateY("+ currdeg +"deg)",
          "-moz-transform": "rotateY("+ currdeg +"deg)",
          "-o-transform": "rotateY("+ currdeg +"deg)",
          "transform": "rotateY("+ currdeg +"deg)"
        });
    }
    
    function teste() {
      switch(currdeg){
        case -30:
          $('.a').removeClass('hover');
          $('.b').addClass('hover');
          break
        default:
          $('.a').addClass('hover');
          break;
      }
    }

    function handleTurnRight(e: any){
      e.preventDefault();

      currdeg = currdeg - 30;
      teste()
      rotate()
    }
    
    function handleTurnLeft(){
      currdeg = currdeg + 30;
      rotate()
    }

  return (
    <section className="project" id="project">
      <div className="title white">
        <h2>Meus Projetos</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="main-container">
        <div className="container-project">
          <div className="carousel">
            <a className="carousel" href="http://letmeask-now.web.app" target="blank" >
              <div className="item a"></div>
            </a>
            <a className="carousel" href="https://github.com/Oliveira-Renato/me50" target="blank" >
              <div className="item b"></div>
            </a>
            <a className="carousel" href="http://letmeask-now.web.app" target="blank" >
              <div className="item c">C</div>
            </a>

              {/* <div className="item d">D</div>
              <div className="item e">E</div>
              <div className="item f">F</div> */}
          </div>
      </div>
      </div>
      <div className="next" onClick={ handleTurnRight }>Next</div>
      <div className="prev" onClick={ handleTurnLeft }>Prev</div>
    </section>
  )
}