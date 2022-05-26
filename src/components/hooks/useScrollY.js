import {useState, useEffect} from "react"

export function useScrolly(){
    const [scrollY, setScrollY] = useState(0);

    const handleScrolly = () =>{
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setScrollY(scrollY);
             
        
    }

    useEffect(() => {
            handleScrolly();
            window.addEventListener('scroll', handleScrolly);

            return () => {
                window.removeEventListener('scroll', handleScrolly);
            }
    },[]);

    return ([scrollY]);
}