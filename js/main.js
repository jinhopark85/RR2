import App from "./App.js";

new App({
  keyword: '',
  $targetInput: document.querySelector('#search'),
  $targetButton: document.querySelector('.btn-search'),
  $targetResult: document.querySelector('.search-result'),
});
