export const filteredData = (text, data) => {
	const result = data.filter((val) => {
		const { heroGear, set } = val;

		return heroGear.indexOf(text) !== -1 || set.indexOf(text) !== -1;
	});

	return result;
};
