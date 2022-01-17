export default function fetchCountries(name) {
  const BASE_URL = 'https://restcountries.com/v3.1';
  console.log(name, `${BASE_URL}/name/${name}`);
  return fetch(`${BASE_URL}/name/${name}`)
    .then(response => {
      if (!response.ok) {
        return Promise.resolve('');
        // throw new Error(response.status);
      }
      return response.json();
    })
    .catch(console.log('jkjkj'));
}
