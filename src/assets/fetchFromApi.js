const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": `${import.meta.env.VITE_API_KEY}`,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchFromApi = async (endpoints) => {
  const url = `https://youtube-search-and-download.p.rapidapi.com/${endpoints}`;

  const res = await fetch(url, options);
  return res;
};
