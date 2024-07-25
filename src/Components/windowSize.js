import { useEffect, useState } from "react"

const WindowSize = () => {

    const [windSize, setWindSize] = useState({
        width:window.innerWidth,
        height:window.innerHeight
    })

    
    


    useEffect(() => {

        const retainSize = () => {
            const updatedWidth =window.innerWidth;
            const updatedHeight = window.innerHeight;
            setWindSize({
                updatedWidth,
                updatedHeight
            })
        }

        
        window.addEventListener('resize', retainSize);

        return (() => {
            window.removeEventListener('resize', retainSize);
        })
    })

    return windSize;
}

export default WindowSize;






   