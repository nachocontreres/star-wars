import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import _debounce from "lodash/debounce";
import Character from "../../app/components/character";
import {
  StyledFavoritesList,
  StyledSearch,
  StyledInput,
  StyledSearchTitle,
} from "./styles";
import { setSearchedCharacters } from "../../app/components/character/charactersSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  const { characters, searchedCharacters } = useSelector(
    (state) => state.charactersData
  );
  const [currentSearch, setCurrentSearch] = useState("");

  const matchesSearch = (currentCharacter) => {
    return currentCharacter.name.toLowerCase().includes(currentSearch);
  };

  const handleSetCurrentSearch = (event) => {
    setCurrentSearch(event.target.value);
  };

  const debouncedSearch = useCallback(
    _debounce(handleSetCurrentSearch, 500),
    []
  );

  useEffect(() => {
    let filteredCharacters = characters.filter(
      (c) => c.isFavorite && matchesSearch(c)
    );
    dispatch(setSearchedCharacters(filteredCharacters));
  }, [currentSearch]);

  return (
    <StyledFavoritesList>
      <StyledSearchTitle>Search a favourite</StyledSearchTitle>
      <StyledSearch>
        <StyledInput onChange={debouncedSearch} />
      </StyledSearch>
      {searchedCharacters.map((c) => (
        <Character character={c} />
      ))}
    </StyledFavoritesList>
  );
};

export default Favorites;
