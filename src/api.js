//Base Url

const api_key = process.env.REACT_APP_API_KEY;

export const fetchData = (query) => {
  return `https://api.spoonacular.com/recipes/complexSearch?apiKey=${api_key}&query=${query}`;
};

export const dataById = (id) => {
  return `https://api.spoonacular.com/recipes/${id}/information?apiKey=${api_key}`;
};
