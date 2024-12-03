import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getCharacters } from "./api/getCharacters"

export interface CharacterInterface {
    id: number
    name: string
    description: string
    element: string
}

export interface CharacterListInreface {
    heroes: CharacterInterface[]
    original_heroes: CharacterInterface[]
}

const initialState: CharacterListInreface = {
    heroes: [],
    original_heroes: []
}

const characeterListSlice = createSlice({
    name: 'characterList',
    initialState,
    reducers: {
        addCharcater: (state, action: PayloadAction<CharacterInterface>) => {
            state.heroes.push(action.payload)
            state.original_heroes = [...state.heroes]
        },
        deleteCharacter: (state, action: PayloadAction<number>) => {
            state.heroes = state.heroes.filter(character => character.id !== action.payload)
            state.original_heroes = [...state.heroes]
        },
        filterCharacter: (state, action: PayloadAction<'water'|'fire'|'wind'|'soil'>) => {
            state.heroes = [...state.original_heroes]
            state.heroes = state.heroes.filter(character => character.element === action.payload)
        },
        resetFilters: (state) => {
            state.heroes = state.original_heroes
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getCharacters.fulfilled, (state, action: PayloadAction<CharacterInterface[]>) => {
            state.heroes.push(...action.payload)
            state.original_heroes = [...state.heroes]
        })
    }
})

export const { addCharcater, deleteCharacter, filterCharacter, resetFilters } = characeterListSlice.actions

export default characeterListSlice.reducer