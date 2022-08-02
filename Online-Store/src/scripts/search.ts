import { IDakimakura } from "../types/index";
import ItemsList from "./itemsList";

export class Search {
  static searchBar: HTMLInputElement | null =
    document.querySelector(".search-input");
  static searchBarCurrentValue: string;
  static inputChangeHandler(event: Event) {
    const searchBar = event.target as HTMLInputElement;
    this.searchBarCurrentValue = searchBar.value.toLowerCase();
    ItemsList.refreshItemsList();
  }
  static filterBySearchValue(items: IDakimakura[]) {
    const searchBar = document.querySelector(
      ".search-input"
    ) as HTMLInputElement;
    if (searchBar && searchBar.value !== "")
      return items.filter((item) =>
        item.name.toLowerCase().includes(this.searchBarCurrentValue)
      );
    else return items;
  }
  static clearCressClickHandler() {
    const searchBar = document.querySelector(
      ".search-input"
    ) as HTMLInputElement;
    if (searchBar !== null) searchBar.value = "";
    ItemsList.refreshItemsList();
  }
  static addSearchListeners() {
    this.searchBar?.addEventListener("input", (e) =>
      this.inputChangeHandler(e)
    );
    document
      .querySelector(".clear-cress")
      ?.addEventListener("click", this.clearCressClickHandler);
  }
}

export default Search;
