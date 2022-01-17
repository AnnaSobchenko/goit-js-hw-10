import Notiflix from 'notiflix';

export default function fetchCountries(name) {
  const BASE_URL = 'https://restcountries.com/v3.1';
  // console.log(name, `${BASE_URL}/name/${name}`);
  return fetch(`${BASE_URL}/name/${name}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(Notiflix.Notify.failure(`Error ${response.status}`));
        // return Notiflix.Notify.failure('❌ Oops, there is no country with that name');
        // throw new Error(response.status);
      }
      return response.json();
    })
    .catch(() => Notiflix.Notify.failure('❌ Oops, there is no country with that name'));
}
