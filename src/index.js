import './css/styles.css';
import debounce from 'lodash.debounce';
import fetchCountries from './fetchCountries';
import CountryItem from './templates/CountryItem.hbs';
import CountryEl from './templates/CountryEl.hbs';

const DEBOUNCE_DELAY = 300;

const refs = {
  searchCountrEl: document.querySelector('#search-box'),
  listCountryEl: document.querySelector('.country-list'),
  infoCountryEl: document.querySelector('.country-info'),
};
let inputValue = '';

refs.searchCountrEl.addEventListener('input', debounce(getCountries, DEBOUNCE_DELAY));

function getCountries() {
  inputValue = refs.searchCountrEl.value;

  if (inputValue.trim() === '') return;

  fetchCountries(inputValue).then(data => {
    createMarkup(data);
    return data;
  });
}

function createMarkup(arrayCountry) {
  console.log(arrayCountry);
  if (arrayCountry.length > 10) {
    console.log('Too many matches found. Please enter a more specific name.');
    return;
  } else if (arrayCountry.length >= 2 && arrayCountry.length <= 10) {
    console.log('2-10');
    const markup = CountryItem(arrayCountry);
    refs.listCountryEl.insertAdjacentHTML('beforeend', markup);
    refs.infoCountryEl.innerHTML = '';
    return;
  }
  const markup = CountryEl(arrayCountry[0]);
  console.log(markup);
  console.log(refs.infoCountryEl);
  refs.listCountryEl.innerHTML = '';
  refs.infoCountryEl.insertAdjacentHTML('beforeend', markup);
  console.log('Country');
}
