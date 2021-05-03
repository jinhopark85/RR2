export default class SearchInput {
	constructor({ keyword, $targetInput, $targetButton, onInput }) {
		this.keyword = keyword;
		this.$targetInput = $targetInput;
		this.$targetButton = $targetButton;

		this.$targetInput.addEventListener("click", (e) => {
			e.target.value = "";
    });
    
    // this.$targetInput.addEventListener("change", (e) => {
		// 	this.keyword = e.target.value;
		// 	console.log(this.keyword);
		// });

		this.$targetInput.addEventListener("keypress", (e) => {
      // this.keyword = e.target.value;
      // console.log(this.keyword);
      e.preventDefault();
			if (e.key !== "Enter" || e.key.value === "") return;
      if (e.target.value.length > 1) {
				onInput(e.target.value);
			}
    });
    
    this.$targetButton.addEventListener('click', () => {
      if (this.$targetInput.value.length < 2) return;
				onInput(this.$targetInput.value);
    });
	}
}
