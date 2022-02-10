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
      <div className="next" >Next</div>
      <div className="prev" >Prev</div>
    </section>
  )
}