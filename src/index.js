// import axios from 'axios';

// axios.defaults.headers.common['x-api-key'] =
//   'live_7dDHCOo0JZCTbep0atS3ICUsRoXBfIxX7884Y8fBBYSfzVm1xFPUnss76zjFZjQh';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

const refs = {
  select: document.querySelector('select'),
  div: document.querySelector('div'),
  loading: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};

// Show loading indicator initially
refs.error.style.display = 'none';
refs.loading.style.display = 'flex';

fetchBreeds()
  .then(data => {
    refs.select.innerHTML = data
      .map(
        ({ id, name }) => `
           <option value="${id}">${name}</option>
      `
      )
      .join('');
  })
  .catch(error => {
    console.error('Error fetching cat data:', error);
    refs.error.style.display = 'flex';
  })
  .finally(() => {
    refs.loading.style.display = 'none';
  });

refs.select.addEventListener('change', handleChange);

// Function to handle the 'change' event
function handleChange(event) {
  // Show loading indicator when a new breed is selected
  refs.loading.style.display = 'flex';

  console.log('Selected breed ID:', event.target.value);

  fetchCatByBreed(event.currentTarget.value)
    .then(catData => {
      refs.div.style.display = 'block';
      refs.div.innerHTML = catData
        .map(
          ({ url, breeds }) => `
           <img src="${url}" width="500px" alt="${breeds[0].name}">
           <h2>${breeds[0].name}</h2>
           <p>${breeds[0].temperament}</p>
      `
        )
        .join('');
    })
    .catch(error => {
      console.error('Error fetching cat data:', error);
      refs.error.style.display = 'flex';
    })
    .finally(() => {
      refs.loading.style.display = 'none';
    });
}
