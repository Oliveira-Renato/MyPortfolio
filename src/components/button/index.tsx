import './style.scss'



export function Button(){
  const button: any= document.querySelector('.submit-button'),
  stateMsg = document.querySelector('.pre-state-msg');


  const updateButtonMsg: any = function() {
    button.classList.add('state-1', 'animated');
    
    setTimeout(finalButtonMsg, 2000);
  };

  const finalButtonMsg: any = function() {
    button.classList.add('state-2', 'animated');

    setTimeout(setInitialButtonState, 2000);
  };

  const setInitialButtonState: any = function() {
    button.classList.remove('state-1', 'state-2', 'animated');
  };


  return (
    <button onClick={updateButtonMsg} className="submit-button state-0"><span className="pre-state-msg">Enviar</span><span className="current-state-msg hide">Enviando...</span><span className="done-state-msg hide">Pronto!</span></button>
  )
}