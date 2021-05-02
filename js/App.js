import SearchInput from './SearchInput.js';
import SearchResult from './SearchResult.js';

export default class App {
	constructor({ keyword, $targetInput, $targetResult }) {
    this.keyword = keyword;
    this.$targetInput = $targetInput;
    this.$targetResult = $targetResult;

    this.searchInput = new SearchInput({
      keyword,
      $targetInput,
      onInput: (nextKeyword) => {
        this.setState(nextKeyword);
      }
    })

    this.searchResult = new SearchResult({
      keyword,
      $targetResult,
    })
  }
  
  setState(nextKeyword) {
    this.keyword = nextKeyword;
    this.searchResult.setState(this.keyword);
  }
}
