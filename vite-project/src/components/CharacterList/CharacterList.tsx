import CharacterItem from './CharacterItem/CharacterItem'
import styles from './CharacterList.module.scss'

export default function CharacterList() {
    return(
        <div className={styles.container}>
            <CharacterItem/>
            <CharacterItem/>
            <CharacterItem/>
        </div>
    )
}