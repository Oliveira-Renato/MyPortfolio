import '../../styles/media.scss'
import '../../styles/global.scss'
import './style.scss';
import $ from "jquery";

/*importação de imagens */
import  letmeAskImg  from "./images/letmeask/letmeaskmobi.jpeg"

export function Projects(){
    var carousel: any = $(".carousel"), currdeg: number  = 0;
  
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
    
    function handleTurnRight(e: any){
      e.preventDefault()
      currdeg = currdeg - 60;
      rotate()
    }
    
    function handleTurnLeft(e:any){
      e.preventDefault()
      currdeg = currdeg + 60;
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
              
              <div className="item b">B</div>
              <div className="item c">C</div>
              <div className="item d">D</div>
              <div className="item e">E</div>
              <div className="item f">F</div>
          </div>
      </div>
      </div>
      <div className="next" onClick={ handleTurnRight }>Next</div>
      <div className="prev" onClick={ handleTurnLeft }>Prev</div>
    </section>
  )
}