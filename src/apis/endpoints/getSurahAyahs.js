import { BASE_API_URL } from '../constants';

const API_URL = ayahNumber => `${ BASE_API_URL }/ayah/${ ayahNumber }`;

const getSurahAyahs = ayahNumber => fetch(API_URL(ayahNumber))
  .then(response => response.json())
  .then(data => data)
  .catch(error => console.log(error));

export default getSurahAyahs;
