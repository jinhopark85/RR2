import SearchInput from "./SearchInput.js";
import SearchResult from "./SearchResult.js";

export default class App {
	constructor({ keyword, $targetInput, $targetButton, $targetResult }) {
		this.keyword = keyword;
		this.$targetInput = $targetInput;
		this.$targetButton = $targetButton;
		this.$targetResult = $targetResult;

		this.searchInput = new SearchInput({
			keyword,
      $targetInput,
      $targetButton,
			onInput: (nextKeyword) => {
				this.setState(nextKeyword);
			},
		});

		this.searchResult = new SearchResult({
			keyword,
			$targetResult,
		});
	}

	setState(nextKeyword) {
		this.keyword = nextKeyword;
		this.searchResult.setState(this.keyword);
	}
}
