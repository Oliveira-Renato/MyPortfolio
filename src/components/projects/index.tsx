import '../../styles/media.scss'
import '../../styles/global.scss'
import './style.scss';
import $ from "jquery";
import { useEffect } from 'react'


export function Projects(){ 
    useEffect(function(){
      var carousel: any = $(".carousel"), rotation: number  = 0;
      var leftButton: any = document.querySelector('.prev');
      var rightButton: any = document.querySelector('.next');
      var rotationValue: number = 60;


      function handleRotate(){
        console.log('deixa com pai')
        console.log(rotation);

        carousel.css({
            "-webkit-transform": "rotateY("+ rotation +"deg)",
            "-moz-transform": "rotateY("+ rotation +"deg)",
            "-o-transform": "rotateY("+ rotation +"deg)",
            "transform": "rotateY("+ rotation +"deg)"
        });

      }


      leftButton.addEventListener('click',function(e: any){
        e.preventDefault()

        rotation += rotationValue
        handleRotate()
      })
      rightButton.addEventListener('click',function(e: any){
        e.preventDefault()

        rotation -= rotationValue
        handleRotate()
      })
    })
  
    

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
      <div className="next" >Next</div>
      <div className="prev" >Prev</div>
    </section>
  )
}