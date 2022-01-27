import '../../styles/media.scss'
import '../../styles/global.scss'
import './style.scss';
import $ from "jquery";

export function Projects(){
    var carousel: any = $(".carousel"), currdeg: number  = 0;
  
    function rotate(){
      console.log('deixa com pai')
      carousel.css({
          "-webkit-transform": "rotateY("+currdeg+"deg)",
          "-moz-transform": "rotateY("+currdeg+"deg)",
          "-o-transform": "rotateY("+currdeg+"deg)",
          "transform": "rotateY("+currdeg+"deg)"
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
              <div className="item a">A</div>
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