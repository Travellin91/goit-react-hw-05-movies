export const getYear = (releaseDate) => {
    const date = new Date(releaseDate);
    return date.getFullYear();
  };
  