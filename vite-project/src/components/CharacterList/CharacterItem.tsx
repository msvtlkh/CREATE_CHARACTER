import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './CharacterItem.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../state/store';
import { useEffect } from 'react';
import { getCharacters } from '../../state/character/api/getCharacters';
import { deleteCharacter } from '../../state/character/characterSlice';


export default function CharacterList() {
    const characters = useSelector((state: RootState) => state.characters.heroes)
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(getCharacters())
    }, [])

    const handleDelete = (id) => {
        dispatch(deleteCharacter(id))
    }
    
    const listItem = characters.map((character) => (
        <div className={`${styles.container} ${styles[`container__${character.element}`]}`} key={crypto.randomUUID()}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/90px-Unknown_person.jpg" 
        alt="hero" 
        className={styles.img} />
    
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <div className={styles.name}>{character.name}</div>
                <div className={styles.desc}>{character.description}</div>
            </div>
    
            <IconButton aria-label="delete" size="large" sx={{color: 'white', padding: 0.5}} onClick={() => handleDelete(character.id)}>
                <DeleteIcon fontSize="inherit" />
            </IconButton>
        </div>
        </div>
    )) 

    return(
        <div className={styles.containerList}>
            {listItem}
        </div>
    )
}


 
