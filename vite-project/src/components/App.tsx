import styles from './App.module.scss'
import CharacterList from "./CharacterList/CharacterList"
import Filter from './Filter/Filter'
import Form from './Form/Form'

function App() {
  return (
    <div className={styles.container}>
      <CharacterList/>

      <div className={styles.wrapper}>
        <Form/>
        <Filter/>
      </div>
    </div>
  )
}

export default App
