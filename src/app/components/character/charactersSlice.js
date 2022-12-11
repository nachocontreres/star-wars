import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: "charactersData",
  initialState: {
    characters: [],
  },
  reducers: {
    setCharacters: (state, { payload }) => {
      state.characters = payload;
    },
    setFavorite: (state, { payload }) => {
      let updatedCharacter = state.characters.filter(
        (c) => c.name === payload.name
      )[0];
      updatedCharacter.isFavorite = !payload.isFavorite;
    },
  },
});

export default charactersSlice.reducer;

export const { setCharacters, setFavorite } = charactersSlice.actions;
