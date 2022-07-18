import { IDakimakura } from "../../types/index";

export class Cart {
  static setSelected(dakimakuras: IDakimakura[]): string[] {
    const selectedItemsId: string[] = [];
    dakimakuras.forEach((dakimakura) => {
      if (window.localStorage.getItem(`${dakimakura.name}`) === "selected") {
        selectedItemsId.push(dakimakura.name);
        const selectedDakimakura = document.getElementById(dakimakura.name);
        const selectedBookmark =
          selectedDakimakura?.querySelector(".bookmark_selected");
        console.log(window.localStorage.getItem(`${dakimakura.name}`));
        if (selectedBookmark !== null && selectedBookmark !== undefined)
          selectedBookmark.classList.add("selected");
      }
    });
    const counter = document.querySelector(".counter-number");
    if (counter !== undefined && counter !== null)
      counter.innerHTML = `${selectedItemsId.length}`;
    return selectedItemsId;
  }

  static sendAlert() {
    const alert = document.querySelector(".over20-alert");
    if (!alert?.classList.contains("active")) {
      alert?.classList.add("active");
      window.setTimeout(() => alert?.classList.remove("active"), 5000);
    }
  }
}

export default Cart;
