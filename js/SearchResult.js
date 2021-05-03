import { SearchResultTemplate } from './utils/templates.js';
import { data } from './utils/mockup.js';
import { filteredData } from './utils/functions.js';

export default class SearchResult {
  constructor({ keyword, $targetResult }) {
    this.keyword = keyword;
    this.$targetResult = $targetResult;

    // this.render();
  }
  setState(nextKeyword) {
    this.keyword = nextKeyword;
    this.render();
  }
  render() {
    const nextData = filteredData(this.keyword, data);
    this.$targetResult.innerHTML = SearchResultTemplate(nextData);
  }
}
