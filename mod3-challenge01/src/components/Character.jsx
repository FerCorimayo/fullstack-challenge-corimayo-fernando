import { useState } from "react";
import { useEffect } from "react";

const CharacterList = () => {
    const [characterList, setCharacterList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState('')


    

return(
    <div className='page'>
    
    <div>
        <img src={image} alt="No hay imagen" />
    </div>
    </div>
)    
}

export default CharacterList