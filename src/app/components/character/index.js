import React from "react";
import { useDispatch } from "react-redux";
import useAxios from "../../hooks/useAxios";
import {
  capitalizeFirst,
  locationPath,
  favoriteActivePath,
  favoriteInactivePath,
  loadingDotsPath,
} from "../../utils/utils";
import { setFavorite } from "./charactersSlice";
import {
  CharacterContainer,
  CharacterName,
  CharacterTopRow,
  FavoriteButton,
  CharacterDescription,
  LocationContainer,
  HomeWorldName,
  LoadingDots,
  LocationIcon,
} from "./styles";

const Character = ({ character }) => {
  const dispatch = useDispatch();
  const { response, loading } = useAxios({
    url: `planets/${character?.homeworld.slice(-2)}`,
    method: "get",
  });

  const gender =
    character.gender === "n/a"
      ? character.gender
      : capitalizeFirst(character.gender);

  const handleAddFavorite = () => {
    dispatch(setFavorite(character));
  };

  return (
    <CharacterContainer>
      <CharacterTopRow>
        <CharacterName>{character.name}</CharacterName>
        <FavoriteButton
          src={character.isFavorite ? favoriteActivePath : favoriteInactivePath}
          onClick={handleAddFavorite}
        />
      </CharacterTopRow>
      <CharacterDescription>
        {gender} | {character?.birth_year}
      </CharacterDescription>
      <LocationContainer>
        {loading ? (
          <LoadingDots src={loadingDotsPath} />
        ) : (
          <>
            <LocationIcon src={locationPath} />
            <HomeWorldName>
              {response?.name ? response?.name : "n/a"}
            </HomeWorldName>
          </>
        )}
      </LocationContainer>
    </CharacterContainer>
  );
};

export default Character;
