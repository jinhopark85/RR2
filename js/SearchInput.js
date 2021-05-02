export default class SearchInput {
  constructor({
    keyword,
    $targetInput,
    onInput,
  }) {
    this.keyword = keyword;
    this.$targetInput = $targetInput;

    this.$targetInput.addEventListener('click', (e) => {
      e.target.value = "";
    });

    this.$targetInput.addEventListener("keypress", (e) => {
			console.log(e.target.value);
			console.log(e.key);
			if (e.key !== "Enter" || e.key.value === "") return;
			onInput(e.target.value);
			e.preventDefault();
		});
  }
}
