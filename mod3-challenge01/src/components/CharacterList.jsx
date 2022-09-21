import { useState } from "react";
import { useEffect } from "react";
import { getCharacters } from "../service";
import { Character } from "Character";

const CharacterList = () => {
    const [characterList, setCharacterList] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [image, setImage] = useState('')

    useEffect(()=>{
        setIsLoading(true);
        getCharacters()
            .then((data) => setCharacterList(data.results))
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false))
    },[])
    

return(
    <div className='page'>
        {isLoading && <span className="loading-text">Loading</span>}
    <div>
        <img src={image} alt="No hay imagen" />

    </div>
        {
            characterList.map((char)=>(
                <Character key={char.id} name={char.name} status={char.status} species={char.species} imageUrl={char.image} setImage={setImage}/>
            )

            )
        }
    </div>
)    
}

export default CharacterList