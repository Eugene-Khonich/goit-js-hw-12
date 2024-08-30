import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
const axiosOptions = {
  params: {
    key: '45505147-33e194e8689097e70f28421cd',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 15,
  },
};
export async function fetchPhotos(searchValue, page) {
  axiosOptions.params.q = searchValue;
  axiosOptions.params.page = page;
  const resp = await axios.get('', axiosOptions);
  return resp.data;
}
