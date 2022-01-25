import './style.scss';
import $ from 'jquery';
import { useState, useEffect } from 'react';

export function Projects(){
    useEffect(()=>{
    var carousel: any =$(".carousel"),currdeg  = 0;

    $(".next").on("click", { d: "n" }, rotate);
    $(".prev").on("click", { d: "p" }, rotate);

    function rotate(e: any){
      if(e.data.d=="n"){
        currdeg = currdeg - 60;
      }
      
      if(e.data.d=="p"){
        currdeg = currdeg + 60;
      }

      carousel.css({
        "-webkit-transform": "rotateY("+currdeg+"deg)",
        "-moz-transform": "rotateY("+currdeg+"deg)",
        "-o-transform": "rotateY("+currdeg+"deg)",
        "transform": "rotateY("+currdeg+"deg)"
      });
    }
  })

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
          </div>
        </div>
        <div className="next">Next</div>
        <div className="prev">Prev</div>
    </section>
  )
}