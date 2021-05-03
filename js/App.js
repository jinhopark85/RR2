import SearchInput from "./SearchInput.js";
import SearchResult from "./SearchResult.js";

export default class App {
	constructor({
		keyword,
		type,
		$targetOptions,
		$targetInput,
		$targetButton,
		$targetResult,
	}) {
		this.keyword = keyword;
		this.type = type;
		this.$targetOptions = $targetOptions;
		this.$targetInput = $targetInput;
		this.$targetButton = $targetButton;
		this.$targetResult = $targetResult;

		this.searchInput = new SearchInput({
      keyword,
      type,
			$targetOptions,
			$targetInput,
			$targetButton,
			onInput: (nextKeyword, nextType) => {
				this.setState(nextKeyword, nextType);
			},
		});

		this.searchResult = new SearchResult({
      keyword,
      type,
			$targetResult,
		});
	}

	setState(nextKeyword, nextType) {
		this.keyword = nextKeyword;
    this.type = nextType;
		this.searchResult.setState(this.keyword, this.type);
	}
}
