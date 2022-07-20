import { IDakimakura } from "../../types/index";
import dakimakuras from "../itemsList/itemsDB";
import ItemsList from "../itemsList/itemsList";

import "./sort.scss";

export class Sort {
  static setEventListeners() {
    const priceHighest = document.getElementById("highest");
    const priceLowest = document.getElementById("lowest");
    const nameAz = document.getElementById("A-Z");
    const nameZa = document.getElementById("Z-A");
    priceHighest?.addEventListener("click", () =>
      this.sortByPriceHandler("highest")
    );
    priceLowest?.addEventListener("click", () =>
      this.sortByPriceHandler("lowest")
    );
    nameAz?.addEventListener("click", () => this.sortByNameHandler("A-Z"));
    nameZa?.addEventListener("click", () => this.sortByNameHandler("Z-A"));
  }

  static getNotHiddenItems() {
    const allItems: Element[] = Array.from(
      document.querySelectorAll(".dakimakura")
    );
    const notHiddenItems: Element[] = allItems.filter(
      (item) => !item.classList.contains(".hidden")
    );
    return notHiddenItems;
  }
  static sortByPrice(items: IDakimakura[], type: string) {
    return items.sort(function (a, b) {
      if (type === "lowest") return a.price - b.price;
      else return b.price - a.price;
    });
  }
  static sortByName(items: IDakimakura[], type: string) {
    const itemNames: string[] = items.map((el) => el.name);
    const sortedItemNames =
      type === "A-Z" ? itemNames.sort() : itemNames.sort().reverse();
    return sortedItemNames.map(
      (itemName) =>
        dakimakuras.filter((dakimakura) => dakimakura.name === itemName)[0]
    );
  }
  static sortByType(items: IDakimakura[], type: string) {
    if (type === "highest" || type === "lowest")
      return this.sortByPrice(items, type);
    else return this.sortByName(items, type);
  }
  static sortByPriceHandler(type: string) {
    const notHiddenItems = this.getNotHiddenItems();
    window.localStorage.setItem("sort", type);
    const sortedElements = notHiddenItems.sort(function (a, b) {
      const aPrice = dakimakuras.filter(
        (dakimakura) => dakimakura.name === a.id
      )[0].price;
      const bPrice = dakimakuras.filter(
        (dakimakura) => dakimakura.name === b.id
      )[0].price;
      if (type === "lowest") return aPrice - bPrice;
      else return bPrice - aPrice;
    });
    ItemsList.displaySortedItems(sortedElements);
  }
  static sortByNameHandler(type: string) {
    const notHiddenItems = this.getNotHiddenItems();
    window.localStorage.setItem("sort", type);
    const notHiddenItemsNames: string[] = [];
    notHiddenItems.forEach((item) => notHiddenItemsNames.push(item.id));
    const notHiddenItemsNamesSorted =
      type === "A-Z"
        ? notHiddenItemsNames.sort()
        : notHiddenItemsNames.sort().reverse();
    console.log(notHiddenItemsNamesSorted);
    const sortedElements: Element[] = [];
    notHiddenItemsNamesSorted.forEach((itemName) => {
      sortedElements.push(
        notHiddenItems.filter((item) => item.id === itemName)[0]
      );
    });
    ItemsList.displaySortedItems(sortedElements);
  }
}

export default Sort;
