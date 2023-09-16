const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "37660475bfmsh04f6579feda28b8p1b5fb5jsn95c614e25226",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchFromApi = async (endpoints) => {
  const url = `https://youtube-search-and-download.p.rapidapi.com/${endpoints}`;

  const res = await fetch(url, options);
  return res;
};
