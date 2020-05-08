import { BASE_API_URL } from '../constants';

const API_URL = `${ BASE_API_URL }/surah/name`;

const getAllSurahNames = () => fetch(API_URL)
  .then(response => response.json())
  .then(data => data)
  .catch(error => console.log(error));

export default getAllSurahNames;
