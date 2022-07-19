import { IDakimakura } from "../../types/index";
import Dakimakura from "../dakimakura/dakimakura";
import Cart from "../cart/cart";
import Sort from "../sort/sort";
import dakimakuras from "./itemsDB";
import Filter from "../filters/filters";

export class ItemsList {
  static itemsContainer = document.querySelector(".items");
  patterns: IDakimakura[];
  constructor(patterns: IDakimakura[]) {
    this.patterns = patterns;
  }

  static fillPage(patterns: IDakimakura[]) {
    patterns.forEach((pattern) => {
      const dakimakura = Dakimakura.createDakimakura(pattern);
      ItemsList.itemsContainer?.append(dakimakura);
    });
    Cart.setSelected(patterns);
  }

  static setHidden() {
    const items = dakimakuras;
    //filter by gender
    //filter by material
    //filter by color
    const filteredByColor: IDakimakura[] = Filter.filterItemsByColor(items);
    document.querySelectorAll(".dakimakura").forEach((el) => {
      el.classList.add("hidden");
    });
    filteredByColor.forEach((el) => {
      document.getElementById(el.name)?.classList.remove("hidden");
    });
  }

  static clearItemsContainer() {
    if (this.itemsContainer === null)
      throw new Error("items container doesnt exist");
    this.itemsContainer.innerHTML = "";
  }

  static displaySortedItems(elements: Element[]) {
    this.clearItemsContainer();
    elements.forEach((el) => ItemsList.itemsContainer?.append(el));
    this.setHidden();
  }

  static refreshItemsList(items?: IDakimakura[]) {
    this.clearItemsContainer();
    const itemsToFilter = items ? items : dakimakuras;
    const sortType = window.localStorage.getItem("sort");
    //gender
    const filteredByGender = Filter.filterItemsByGender(itemsToFilter);
    console.log(filteredByGender);
    //material
    const filteredByMaterial = Filter.filterItemsByMaterial(filteredByGender);
    console.log(filteredByMaterial);
    //popular
    const filteredByPopular = Filter.filterByPopular(filteredByMaterial);
    console.log(filteredByPopular);
    //color
    const finallyFiltered = Filter.filterItemsByColor(filteredByPopular);
    if (sortType !== null) {
      const sorted = Sort.sortByType(finallyFiltered, sortType);
      this.fillPage(sorted);
    } else this.fillPage(finallyFiltered);
  }
}

export default ItemsList;
