import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "../../app/hooks/useAxios";
import Character from "../../app/components/character";
import { setCharacters } from "../../app/components/character/charactersSlice";
import { formatCharacters, loadingPath } from "../../app/utils/utils";
import { StyledCharactersList, Loader } from "./styles";

const Characters = () => {
  const listRef = useRef(null);
  const responseDataRef = useRef(null);
  const dispatch = useDispatch();
  const [pageToLoad, setPageToLoad] = useState("people/?page=1");
  const { response, error, loading } = useAxios({
    url: pageToLoad,
    method: "get",
  });
  const { characters } = useSelector((state) => state.charactersData);

  useEffect(() => {
    if (response?.results?.length) {
      responseDataRef.current = {
        count: response?.count,
        next: response?.next,
      };
      let formattedCharacters = formatCharacters(response.results);
      dispatch(setCharacters([...characters, ...formattedCharacters]));
    }
  }, [response]);

  const handleGetNextBatch = () => {
    if (responseDataRef.current?.next) {
      setPageToLoad(responseDataRef.current.next);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const listElement = listRef.current;
      // Check if the user has scrolled to the bottom of the list
      if (window.scrollY + window.innerHeight >= listElement.scrollHeight) {
        // The user has scrolled to the bottom of the list
        handleGetNextBatch();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledCharactersList ref={listRef}>
      {loading && <Loader data-testid="loader" src={loadingPath} />}

      {characters.map((character) => (
        <Character character={character} key={character.name} />
      ))}
      {error && alert("There was an error trying to load Characters")}
    </StyledCharactersList>
  );
};

export default Characters;
