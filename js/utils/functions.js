export const filteredData = (text, data) => {
	const result = data.filter((val) => {
		const { heroGear } = val;

		return heroGear.indexOf(text) !== -1;
	});

	return result;
};
