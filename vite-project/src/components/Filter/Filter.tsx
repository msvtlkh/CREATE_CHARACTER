import { Button, ButtonGroup } from '@mui/material'
import styles from './Filter.module.scss'

export default function Filter() {
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
                <Button sx={{backgroundColor:'black'}}>Все</Button>
                <Button sx={{backgroundColor:'red'}}>Огонь</Button>
                <Button>Вода</Button>
                <Button sx={{backgroundColor:'green'}}>Ветер</Button>
                <Button sx={{backgroundColor:'grey'}}>Земля</Button>
            </ButtonGroup>
        </div>
    )
}