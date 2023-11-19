export { fetchBreeds, fetchCatByBreed };

function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds').then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  });
}

function fetchCatByBreed(breedId) {
  const BASE_URL = 'https://api.thecatapi.com/v1/images';
  const END_POINT = 'search';
  const API_KEY =
    'live_7dDHCOo0JZCTbep0atS3ICUsRoXBfIxX7884Y8fBBYSfzVm1xFPUnss76zjFZjQh';

  const params = new URLSearchParams({
    breed_ids: breedId,
    api_key: API_KEY,
  });

  return fetch(`${BASE_URL}/${END_POINT}?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    return response.json();
  });
}
