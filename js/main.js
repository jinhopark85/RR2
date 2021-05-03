import App from "./App.js";

new App({
  keyword: '',
  type: 'Type',
  $targetOptions: document.querySelector('.input-options'),
  $targetInput: document.querySelector('#search'),
  $targetButton: document.querySelector('.btn-search'),
  $targetResult: document.querySelector('.search-result'),
});
