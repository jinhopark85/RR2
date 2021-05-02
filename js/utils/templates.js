export const SearchResultTemplate = (results) => {
	const temp = results
		.map((result) => {
			const { heroGear, type, url, collection, level, set, number } = result;
			return `
      <div>
          <img src=${url} alt="이미지">
          <h3>이름: ${heroGear}</h3>
          <div>타입: ${type}</div>
          <div>종류: ${collection}</div>
          <div>세트: ${set}</div>
          <div>레벨: ${level}</div>
          <div>필요개수: ${number}</div>
      </div>
      `;
		})
		.join("");
	return `
    <div class="grid-container">
      ${temp}
    </div>
  `;
};
