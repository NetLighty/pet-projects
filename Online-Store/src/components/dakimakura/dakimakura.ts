import { IDakimakura } from "../../types/index";
import Cart from "../../scripts/cart";
import "./dakimakura.scss";

export class Dakimakura {
  static dakimakuraClickListener(id: string) {
    const clickedDakimakura = document.getElementById(`${id}`);
    const bookmark = clickedDakimakura?.querySelector(".bookmark_selected");
    if (clickedDakimakura && bookmark) {
      const isSelected = !bookmark.classList.contains("selected");
      const localStorageCounterNumber = Number(localStorage.getItem("counter"));
      if (isSelected && localStorageCounterNumber >= 10) {
        Cart.sendAlert();
      } else {
        Dakimakura.toggleBookmark(id, bookmark);
        Dakimakura.changeCounter(isSelected, localStorageCounterNumber);
      }
    }
  }

  static toggleBookmark(dakimakuraId: string, bookmark: Element) {
    bookmark.classList.toggle("selected");
    localStorage.setItem(
      `${dakimakuraId}`,
      `${bookmark.classList.contains("selected") ? "selected" : "not-selected"}`
    );
  }
  static changeCounter(isSelected: boolean, localStorageCounterNumber: number) {
    const counterElement = document.querySelector(".counter-number");
    if (counterElement) {
      if (!localStorageCounterNumber) {
        localStorage.setItem("counter", "0");
      }
      if (isSelected) {
        localStorage.setItem("counter", `${localStorageCounterNumber + 1}`);
        counterElement.innerHTML = `${localStorageCounterNumber + 1}`;
      } else {
        localStorage.setItem("counter", `${localStorageCounterNumber - 1}`);
        counterElement.innerHTML = `${localStorageCounterNumber - 1}`;
      }
    } else return;
  }

  static createDakimakura(info: IDakimakura): HTMLDivElement {
    const dakimakura = document.createElement("div");
    dakimakura.className = "dakimakura";
    dakimakura.id = `${info.name}`;
    dakimakura.addEventListener("click", () =>
      this.dakimakuraClickListener(info.name)
    );
    dakimakura.innerHTML = `<img class="dakimakura__img" src="${
      info.imgSrc
    }" alt="daki-img">
    <img src="./images/bookmark.png" class="bookmark selected" alt="bookmark"></img>
    <img src="./images/bookmark-choosen.png" class="bookmark bookmark_selected" alt="bookmark-choosen"></img>
    <div class="dakimakura__main-info">
      <a class="dakimakura__name">${info.name}</a>
      <a class="dakimakura__price">${
        info.price
      }<img src="./images/yen-sign.png" class="dakimakura__currency" alt="currency"></img></a>
    </div>
    <div class="dakimakura__description">
      <span class="attribute">Title: </span>
      <span class="value" id="title">${info.title}</span>
      <span class="attribute">Gender: </span>
      <span class="value" id="gender">${info.gender}</span>
      <span class="attribute">Colors: </span>
      <span class="value" id="colors">${[...info.colors]}</span>
      <span class="attribute">Material: </span>
      <span class="value" id="material">${info.material}</span>
      <span class="attribute">Popular: </span>
      <span class="value" id="popular">${info.isPopular}</span>
    </div>`;
    return dakimakura;
  }
}

export default Dakimakura;
