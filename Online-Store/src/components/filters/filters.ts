import { IDakimakura } from "../../types/index";
import FiltersController from "../controller/FiltersController";
import dakimakuras, { colors } from "../itemsList/itemsDB";
import ItemsList from "../itemsList/itemsList";
import Sort from "../sort/sort";
import "./filters.scss";

export class Filter {
  static setSelectedColors() {
    colors.forEach((color) => {
      const colorButton = document.getElementById(color);
      if (window.localStorage.getItem(color) === "true")
        colorButton?.classList.add("active");
      else colorButton?.classList.remove("active");
    });
  }
  static setResetListener() {
    const reset = document.querySelector(".reset-button");
    reset?.addEventListener("click", FiltersController.resetFilters);
  }
  static colorClickHandler = (e: Event, color: string) => {
    const colorButton = document.getElementById(color);
    colorButton?.classList.toggle("active");
    window.localStorage.setItem(
      color,
      String(colorButton?.classList.contains("active"))
    );
    //this.filterByColor();
    ItemsList.refreshItemsList();
    console.log(color);
  };
  static setColorsEventListeners() {
    document.querySelectorAll(".color-btn")?.forEach((el) => {
      el.addEventListener("click", (e) => this.colorClickHandler(e, el.id));
    });
  }
  static getSelectedColors() {
    const activeColors: string[] = [];
    Array.from(document.querySelectorAll(".color-btn")).forEach((button) => {
      if (button.classList.contains("active")) activeColors.push(button.id);
    });
    return activeColors;
  }
  /* static filterByColor() {
    const notHiddenItems = Sort.getNotHiddenItems();
    const activeColors = this.getSelectedColors();
    const filteredItems = notHiddenItems.filter((item) => {
      const itemPattern = dakimakuras.filter(
        (dakimakura) => dakimakura.name === item.id
      )[0];
      if (this.findCommon(itemPattern.colors, activeColors).length > 0)
        return true;
    });
    ItemsList.refreshItemsList(filteredItems);
  } */
  static filterItemsByColor(items: IDakimakura[]) {
    const activeColors = this.getSelectedColors();
    const filteredItems = items.filter((item) => {
      if (this.findCommon(item.colors, activeColors).length > 0) return true;
    });
    return filteredItems;
  }
  static findCommon(arr1: string[], arr2: string[]) {
    const result: string[] = [];
    for (const el of arr1) {
      if (this.inArray(el, arr2)) {
        result.push(el);
      }
    }
    return result;
  }
  static inArray(el: string, arr: string[]) {
    return arr.indexOf(el) !== -1;
  }
}

export default Filter;
