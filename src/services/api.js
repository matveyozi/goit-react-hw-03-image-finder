import axios from 'axios';

const KEY = '34711822-1a18608b89d6db278337710b9';
axios.defaults.baseURL = `https://pixabay.com/api/`;

export async function fetchPictures(search, page) {
  const {data} = await axios.get('https://pixabay.com/api/',
    {
      params: {
        q: search,
        key: KEY,
        per_page: 12,
        page,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true
      }
    }
  );

  return data;
}

