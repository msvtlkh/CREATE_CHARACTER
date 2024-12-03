import Textarea from '@mui/joy/Textarea';
import styles from './Form.module.scss'
import { TextField } from '@mui/material';
import { Button, Option, Select } from '@mui/joy';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../state/store';
import { addCharcater } from '../../state/character/characterSlice';

export default function Form() {
    let id = 4
    const dispatch = useDispatch<AppDispatch>()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const formData = new FormData(event.target as HTMLFormElement)

        const hero = {
            id: id++,
            name: formData.get('name'),
            description: formData.get('description'),
            element: formData.get('element')
        }

        if(hero.name && hero.description && hero.element) {
            dispatch(addCharcater(hero))
        } else {
            console.log('All fields are required')
        }
        
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.title} >Имя нового героя</div>
            <TextField id="outlined-basic" variant="outlined" placeholder='Как меня зовут?' name="name" sx={{marginBottom: 3}} fullWidth required/>

            <div className={styles.title}>Описание</div>
            <Textarea
                color="neutral"
                minRows={4}
                placeholder="Что я умею?"
                size="md"
                variant="outlined"
                name='description'
                required
            />

            <div className={styles.subtitle}>Выбрать элемент героя</div>

            <Select placeholder="Я владею элементом..." className={styles.select} name='element' required>
                <Option value='fire'>Огонь</Option>
                <Option value='water'>Вода</Option>
                <Option value='wind'>Ветер</Option>
                <Option value='soil'>Земля</Option>
            </Select>

            <Button type='submit'>Создать</Button>
        </form>
    )
}