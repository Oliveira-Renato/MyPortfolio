import './style.scss'
import { useEffect } from 'react';
import toast from 'react-hot-toast';


export function Button(){

  
  useEffect(() => {
    const button:any = document.querySelector('.submit-button')
    const inputs:any = document.querySelectorAll('input')
    const message:any = document.querySelectorAll('textarea')


      function updateButtonMsg() {
        button.classList.add('state-1', 'animated');
        
        setTimeout(finalButtonMsg, 2000);
      }
  
        function finalButtonMsg() {
          button.classList.add('state-2', 'animated');
  
          setTimeout(setInitialButtonState, 2000);
        };
  
        function setInitialButtonState() {
          button.classList.remove('state-1', 'state-2', 'animated')
        } 
        
        button.addEventListener('click',function(){
          if(inputs[0].value != '' && inputs[2].value != '' && message[0].value){
            updateButtonMsg()
          }else{
            toast.error("Preencha os campos primeiro!", 
                {
                    icon: '⚠️',
                    style: {
                    width: '300px',
                    background: 	'#FF8C00',
                    color: '#fff',
                    fontSize: '1.6em',
                    },
                })
          }
        })
  }) 
  

  
  return (
    <button className="submit-button"><span className="pre-state-msg">Enviar</span><span className="current-state-msg hide">Enviando...</span><span className="done-state-msg hide">Pronto!</span>
    </button>
  )
}