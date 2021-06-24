import { SearchResultTemplate } from './utils/templates.js';
import { data } from './utils/items.js';
import { filteredData } from './utils/functions.js';

export default class SearchResult {
  constructor({ keyword, type, $targetResult }) {
    this.keyword = keyword;
    this.type = type;
    this.$targetResult = $targetResult;
  }
  setState(nextKeyword, nextType) {
    this.keyword = nextKeyword;
    this.type = nextType;
    this.render();
  }
  render() {
    const nextData = filteredData(this.keyword, data);
    this.$targetResult.innerHTML = SearchResultTemplate(nextData, this.type);
  }
}
