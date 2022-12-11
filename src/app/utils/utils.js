export const capitalizeFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const favoriteActivePath = "/images/favorite_active.png";
export const favoriteInactivePath = "/images/favorite_inactive.png";
export const locationPath = "/images/location.png";
export const loadingDotsPath = "/images/loading_dots.png";
export const loadingPath = "/images/r2d2.png";

export const formatCharacters = (charactersToFormat) => {
  let formattedCharacters = [];
  charactersToFormat.forEach((c) => {
    formattedCharacters.push({
      name: c.name,
      gender: c.gender,
      birth_year: c.birth_year,
      homeworld: c.homeworld,
      isFavorite: false,
    });
  });
  return formattedCharacters;
};
