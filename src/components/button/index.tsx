import './style.scss'
import { useEffect } from 'react';


export function Button(){

  useEffect(() => {
    const button:any = document.querySelector('.submit-button')
    
    const updateButtonMsg: any = () => {
      button.classList.add('state-1', 'animated');
      
      setTimeout(finalButtonMsg, 2000);
    }

      const finalButtonMsg: any = function() {
        button.classList.add('state-2', 'animated');

        setTimeout(setInitialButtonState, 2000);
      };

      const setInitialButtonState: any = function() {
        button.classList.remove('state-1', 'state-2', 'animated')
      }
      
      button.addEventListener('click',function(){
        updateButtonMsg()
      })
  }) 

  
  return (
    <button className="submit-button"><span className="pre-state-msg">Enviar</span><span className="current-state-msg hide">Enviando...</span><span className="done-state-msg hide">Pronto!</span>
    </button>
  )
}