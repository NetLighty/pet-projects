import { IDakimakura } from "../../types/index";
import dakimakuras from "../itemsList/itemsDB";
import ItemsList from "../itemsList/itemsList";

export class Search {
  static searchBar: HTMLInputElement | null =
    document.querySelector(".search-input");
  static inputChangeHandler(event: Event) {
    const searchBar = event.target as HTMLInputElement;
    console.log(searchBar.value);
    const filteredBySearchValue = this.filterBySearchValue(
      dakimakuras,
      searchBar.value.toLowerCase()
    );
    ItemsList.refreshItemsList(filteredBySearchValue);
  }
  static filterBySearchValue(items: IDakimakura[], searchValue: string) {
    return items.filter((item) =>
      item.name.toLowerCase().includes(searchValue)
    );
  }
  static addSearchListeners() {
    this.searchBar?.addEventListener("input", (e) =>
      this.inputChangeHandler(e)
    );
  }
}

export default Search;
