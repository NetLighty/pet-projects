import { IDakimakura } from "../../types/index";
import Dakimakura from "../dakimakura/dakimakura";
import Cart from "../cart/cart";

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
    Cart.setSelected(items);
  }
}

export default ItemsList;
