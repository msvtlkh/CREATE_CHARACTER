import Textarea from '@mui/joy/Textarea';
import styles from './Form.module.scss'
import { TextField } from '@mui/material';
import { Button, Option, Select } from '@mui/joy';

export default function Form() {
    return(
        <form className={styles.form}>
            <div className={styles.title}>Имя нового героя</div>
            <TextField id="outlined-basic" variant="outlined" placeholder='Как меня зовут?' sx={{marginBottom: 3}} fullWidth/>

            <div className={styles.title}>Описание</div>
            <Textarea
                color="neutral"
                minRows={4}
                placeholder="Что я умею?"
                size="md"
                variant="outlined"
            />

            <div className={styles.subtitle}>Выбрать элемент героя</div>

            <Select placeholder="Я владею элементом..." className={styles.select}>
                <Option value='fire'>Огонь</Option>
                <Option value='water'>Вода</Option>
                <Option value='wind'>Ветер</Option>
                <Option value='soil'>Земля</Option>
            </Select>

            <Button>Создать</Button>
        </form>
    )
}