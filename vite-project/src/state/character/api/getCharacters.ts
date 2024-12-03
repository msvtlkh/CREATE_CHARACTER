import { createAsyncThunk } from "@reduxjs/toolkit";
import { CharacterInterface } from "../characterSlice";

export const getCharacters = createAsyncThunk<CharacterInterface[], void>(
    'characters/getCharacters',
    async () => {
        try {
            const response = await fetch('http://localhost:3000/heroes');
            const data = await response.json()
            return data;
        } catch (error) {
            console.log(error)
        }
    }
)