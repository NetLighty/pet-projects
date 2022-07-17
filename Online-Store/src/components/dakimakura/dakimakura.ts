import { IDakimakura } from "../../types/index";
import "./dakimakura.scss";

export class Dakimakura {
  static createDakimakura(info: IDakimakura): HTMLDivElement {
    const dakimakura = document.createElement("div");
    dakimakura.className = "dakimakura";
    dakimakura.id = `${info.name}`;
    dakimakura.innerHTML = `<img class="dakimakura__img" src="${
      info.imgSrc
    }" alt="daki-img">
    <div class="dakimakura__main-info">
      <a class="dakimakura__name">${info.name}</a>
      <a class="dakimakura__price">${info.price}</a>
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
  /* <div class="dakimakura">
          <img class="dakimakura__img" src="./images/genshin-Jinn.jpg" alt="genshin-Jinn">
          <div class="dakimakura__main-info">
            <a class="dakimakura__title">Jinn</a>
            <a class="dakimakura__price">1490 RUB</a>
          </div>
          <div class="dakimakura__description">
            <span class="attribute">Title: </span>
            <span class="value" id="title">Genshin Impact</span>
            <span class="attribute">Gender: </span>
            <span class="value" id="gender">Girl</span>
            <span class="attribute">Colors: </span>
            <span class="value" id="colors">White, Blue</span>
            <span class="attribute">Popular: </span>
            <span class="value" id="popular">Yes</span>
          </div>
        </div> */
}

export default Dakimakura;
