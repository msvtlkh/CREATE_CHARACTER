import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './CharacterItem.module.scss'

export default function CharacterItem() {
    return(
        <div className={styles.container}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/90px-Unknown_person.jpg" 
            alt="hero" 
            className={styles.img} />

            <div className={styles.wrapper}>
                <div className={styles.info}>
                    <div className={styles.name}>Первый герой</div>
                    <div className={styles.desc}>Первый герой в рейтинге</div>
                </div>

                <IconButton aria-label="delete" size="large" sx={{color: 'white', padding: 0.5}}>
                    <DeleteIcon fontSize="inherit" />
                </IconButton>
            </div>
        </div>
    )
}