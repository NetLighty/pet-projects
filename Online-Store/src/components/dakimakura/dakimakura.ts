import { IDakimakura } from "../../types/index";
import Cart from "../cart/cart";
import "./dakimakura.scss";

export class Dakimakura {
  static dakimakuraClickListener(id: string) {
    Cart.sendAlert();
    const clickedDakimakura = document.getElementById(`${id}`);
    const counter = document.querySelector(".counter-number");
    const selectedBookmark =
      clickedDakimakura?.querySelector(".bookmark_selected");
    const notSelectedBookmark = clickedDakimakura?.querySelector(
      ".bookmark_not-selected"
    );
    if (selectedBookmark?.classList.contains("selected")) {
      selectedBookmark.classList.remove("selected");
      notSelectedBookmark?.classList.add("selected");
      window.localStorage.setItem(`${id}`, `not-selected`);
      if (counter !== null)
        counter.innerHTML = `${Number(counter?.innerHTML) - 1}`;
    } else {
      selectedBookmark?.classList.add("selected");
      notSelectedBookmark?.classList.remove("selected");
      window.localStorage.setItem(`${id}`, `selected`);
      if (counter !== null)
        counter.innerHTML = `${Number(counter?.innerHTML) + 1}`;
    }
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
    <img src="./images/bookmark.png" class="bookmark bookmark_not-selected selected" alt="bookmark"></img>
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
      <span class="attribute">Popular: </span>
      <span class="value" id="popular">${info.isPopular}</span>
    </div>`;
    return dakimakura;
  }
}

export default Dakimakura;
