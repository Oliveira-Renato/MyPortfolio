import { useEffect } from "react"
import './styles.scss'

const UseHeaderShow= () => {
    useEffect(() => {
        const header: any = document.querySelector("#header");
        const navHeight = header.offsetHeight;

        window.addEventListener('scroll', function(){
            if(window.scrollY >= navHeight){
                header.classList.add('scroll')
            } else {
                header.classList.remove('scroll')
            }
        })
    })

    return null
}

export default UseHeaderShow;
