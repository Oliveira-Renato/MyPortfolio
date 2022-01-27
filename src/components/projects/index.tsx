import './style.scss';
import $ from "jquery";

export function Projects(){
    var carousel: any = $(".carousel"), currdeg: number  = 0;
  
    function rotate(){
      
      carousel.css({
          "-webkit-transform": "rotateY("+currdeg+"deg)",
          "-moz-transform": "rotateY("+currdeg+"deg)",
          "-o-transform": "rotateY("+currdeg+"deg)",
          "transform": "rotateY("+currdeg+"deg)"
        });
    }
    
    function handleTurnRight(e:any){
      currdeg = currdeg - 60;
      rotate()
    }
    function handleTurnLeft(e:any){
      currdeg = currdeg + 60;
      rotate()
    }

  return (
    <section className="project" id="project">
      <div className="title black">
        <h2>Meus Projetos</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolores cumque voluptatum doloremque maxime quidem obcaecati, delectus minima soluta similique cupiditate porro debitis.</p>
      </div>
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
      <button className="next" onClick={ handleTurnRight } >Next</button>
      <button className="prev" onClick={ handleTurnLeft } >Prev</button>
    </section>
  )
}