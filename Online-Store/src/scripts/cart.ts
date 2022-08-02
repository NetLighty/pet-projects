import { IDakimakura } from "../types/index";

export class Cart {
  static setSelected(dakimakuras: IDakimakura[]): string[] {
    const selectedItemsId: string[] = [];
    dakimakuras.forEach((dakimakura) => {
      if (window.localStorage.getItem(`${dakimakura.name}`) === "selected") {
        selectedItemsId.push(dakimakura.name);
        const selectedDakimakura = document.getElementById(dakimakura.name);
        const selectedBookmark =
          selectedDakimakura?.querySelector(".bookmark_selected");
        if (selectedBookmark)
          selectedBookmark.classList.add("selected");
      }
    });
    const counter = document.querySelector(".counter-number");
    if (counter)
      counter.innerHTML = `${Number(window.localStorage.getItem("counter"))}`;
    return selectedItemsId;
  }

  static sendAlert() {
    const alert = document.querySelector(".over20-alert");
    if (alert) {
      if (!alert.classList.contains("alert-active")) {
        alert.classList.add("alert-active");
        window.setTimeout(() => alert?.classList.remove("alert-active"), 5000);
      }
    }
  }
}

export default Cart;
