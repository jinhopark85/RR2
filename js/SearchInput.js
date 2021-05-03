export default class SearchInput {
	constructor({
    keyword,
    type,
		$targetOptions,
		$targetInput,
		$targetButton,
		onInput,
	}) {
		this.keyword = keyword;
		this.type = type;
		this.$targetOptions = $targetOptions;
		this.$targetInput = $targetInput;
		this.$targetButton = $targetButton;

		this.$targetInput.addEventListener("click", (e) => {
			e.target.value = "";
		});

		this.$targetOptions.addEventListener("change", (e) => {
			this.type = e.target.value;
		});

		this.$targetInput.addEventListener("keypress", (e) => {
			e.preventDefault();
			if (e.key !== "Enter" || e.key.value === "") return;
			if (e.target.value.length > 1) {
        console.log(this.type);
				onInput(e.target.value, this.type);
			}
		});

		this.$targetButton.addEventListener("click", () => {
			if (this.$targetInput.value.length < 2) return;
			onInput(this.$targetInput.value, this.type);
		});
	}
}
