export const exerciseOptions = {

    method: 'GET',
    headers: {
      'x-rapidapi-key': '3efa328731msh05011fd4ca59fa8p1f1bf3jsnc3b20e2f7da4',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
  
}
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};
export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
