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

		this.$targetInput.addEventListener("keydown", (e) => {
			if (e.key !== "Enter") return;
			
			if (e.target.value.length > 1) {
				e.preventDefault();
				onInput(e.target.value, this.type);
			}
		});

		this.$targetButton.addEventListener("click", () => {
			if (this.$targetInput.value.length < 2) {
				alert("두글자 이상 입력해주세요");
				return;
			}
			onInput(this.$targetInput.value, this.type);
		});
	}
}
