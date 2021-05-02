import SearchInput from './SearchInput.js';
// import SearchResult from './SearchResult.js';

export default class App {
	constructor({ keyword, $targetInput, $targetResult }) {
    this.keyword = keyword;
    this.$targetInput = $targetInput;
    this.$targetResult = $targetResult;

    this.searchInput = new SearchInput({
      $targetInput,
      onInput: (text) => {
        console.log(text)
      }
    })
	}
}
