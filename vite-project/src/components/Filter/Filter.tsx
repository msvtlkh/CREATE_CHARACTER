import { Button, ButtonGroup } from '@mui/material'
import styles from './Filter.module.scss'
import { useDispatch } from 'react-redux'
import { filterCharacter, resetFilters } from '../../state/character/characterSlice'

export default function Filter() {
    const dispatch = useDispatch()

    return(
        <div className={styles.wrapper}>
            <p className={styles.title}>Отфильтруйте героев по элементам</p>
            <ButtonGroup 
                variant="contained" 
                aria-label="Basic button group"
                sx={{
                    '& .MuiButton-root': {
                      fontSize: '10px', 
                      boxShadow: 'none', 
                      border: 'none', 
                    },
                    '& .MuiButton-root:hover': {
                      boxShadow: 'none', 
                    },
                    '& .MuiButtonGroup-grouped:not(:last-of-type)': {
                      borderRight: 'none',
                    },
                  }}
            >
                <Button sx={{backgroundColor:'black'}} onClick={() => dispatch(resetFilters())}>Все</Button>
                <Button sx={{backgroundColor:'red'}} onClick={() => dispatch(filterCharacter('fire'))}>Огонь</Button>
                <Button onClick={() => dispatch(filterCharacter('water'))}>Вода</Button>
                <Button sx={{backgroundColor:'green'}} onClick={() => dispatch(filterCharacter('wind'))}>Ветер</Button>
                <Button sx={{backgroundColor:'grey'}} onClick={() => dispatch(filterCharacter('soil'))}>Земля</Button>
            </ButtonGroup>
        </div>
    )
}