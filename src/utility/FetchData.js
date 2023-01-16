// export const exerciseOptions = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
//       'X-RapidAPI-Key': '3f6e155f0amsh16c2b2f69ed2054p155891jsn8a25ec5d158b'
//     }
//   };

 export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '3f6e155f0amsh16c2b2f69ed2054p155891jsn8a25ec5d158b',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}
