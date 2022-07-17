import { IDakimakura } from "../../types/index";
import Dakimakura from "../dakimakura/dakimakura";

export class ItemsList {
  items: IDakimakura[];
  constructor(items: IDakimakura[]) {
    this.items = items;
  }

  fillPage(items: IDakimakura[]) {
    const itemsContainer = document.querySelector(".items");
    items.forEach((item) => {
      const dakimakura = Dakimakura.createDakimakura(item);
      itemsContainer?.append(dakimakura);
    });
  }
}

export default ItemsList;
