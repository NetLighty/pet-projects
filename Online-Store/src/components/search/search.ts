import { IDakimakura } from "../../types/index";
import dakimakuras from "../itemsList/itemsDB";
import ItemsList from "../itemsList/itemsList";

export class Search {
  static searchBar: HTMLInputElement | null =
    document.querySelector(".search-input");
  static searchBarCurrentValue: string;
  static inputChangeHandler(event: Event) {
    const searchBar = event.target as HTMLInputElement;
    console.log(searchBar.value);
    this.searchBarCurrentValue = searchBar.value.toLowerCase();
    ItemsList.refreshItemsList();
  }
  static filterBySearchValue(items: IDakimakura[]) {
    if (this.searchBarCurrentValue)
      return items.filter((item) =>
        item.name.toLowerCase().includes(this.searchBarCurrentValue)
      );
    else return items;
  }
  static addSearchListeners() {
    this.searchBar?.addEventListener("input", (e) =>
      this.inputChangeHandler(e)
    );
  }
}

export default Search;
