import axios from 'axios';
const headersOptions = {
  'x-rapidapi-host': 'tasty.p.rapidapi.com',
  'x-rapidapi-key': '0435a69c99mshd49386c682af227p1b6d61jsn0ecdda1dbdfb',
};
export const fetchRecipes = async () => {
  const data = await axios.get(
    'https://tasty.p.rapidapi.com/recipes/list?from=0&size=50&tags=under_30_minutes',
   { headers: headersOptions}
  );
  return data.data.results;
};
export const fetchRecipeDetail = async id => {
  console.log('inside id', id);
  const data = await axios.get(
    `https://tasty.p.rapidapi.com/recipes/detail?id=${id}`,
    { headers: headersOptions}
  );
return data.data
};
