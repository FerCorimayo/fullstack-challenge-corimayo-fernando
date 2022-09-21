import { useState } from "react";
import { useEffect } from "react";
import { getCharacters } from "../service";
import Character from "./Character";

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
            characterList.map((character)=>(
                < Character 
                 key={character.id} 
                 name={character.name} 
                 status={character.status} 
                 species={character.species} 
                 imageUrl={character.image} 
                 setImage={setImage}
                />
            )

            )
        }
    </div>
)    
}

export default CharacterList;