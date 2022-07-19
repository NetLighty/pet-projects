import { IDakimakura } from "../../types/index";
import FiltersController from "../controller/FiltersController";
import dakimakuras, { colors, materials } from "../itemsList/itemsDB";
import ItemsList from "../itemsList/itemsList";
import Search from "../search/search";
import Sort from "../sort/sort";
import "./filters.scss";

export class Filter {
  //Reset
  static setResetListener() {
    const reset = document.querySelector(".reset-button");
    reset?.addEventListener("click", FiltersController.resetFilters);
  }
  //Colors
  static setSelectedColors() {
    colors.forEach((color) => {
      const colorButton = document.getElementById(color);
      if (window.localStorage.getItem(color) === "true")
        colorButton?.classList.add("active");
      else colorButton?.classList.remove("active");
    });
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
  static allColorClickHandler() {
    document.querySelectorAll(".color-btn").forEach((colorBtn) => {
      if (!colorBtn.classList.contains("active"))
        colorBtn.classList.add("active");
      window.localStorage.setItem(colorBtn.id, "true");
    });
    ItemsList.refreshItemsList();
  }
  static setColorsEventListeners() {
    document.querySelectorAll(".color-btn")?.forEach((el) => {
      el.addEventListener("click", (e) => this.colorClickHandler(e, el.id));
    });
    document
      .getElementById("all-color")
      ?.addEventListener("click", this.allColorClickHandler);
  }
  static getSelectedColors() {
    const activeColors: string[] = [];
    Array.from(document.querySelectorAll(".color-btn")).forEach((button) => {
      if (button.classList.contains("active")) activeColors.push(button.id);
    });
    return activeColors;
  }
  static filterItemsByColor(items: IDakimakura[]) {
    const activeColors = this.getSelectedColors();
    if (activeColors.length === 0) return items;
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

  //Gender
  static setSelectedGender() {
    const selectedGender = window.localStorage.getItem("gender");
    if (selectedGender !== null) {
      if (selectedGender === "boy") {
        document.getElementById("boy")?.classList.add("active");
        document.getElementById("girl")?.classList.remove("active");
        document.getElementById("all-gender")?.classList.remove("active");
      } else if (selectedGender === "girl") {
        document.getElementById("boy")?.classList.remove("active");
        document.getElementById("girl")?.classList.add("active");
        document.getElementById("all-gender")?.classList.remove("active");
      } else if (selectedGender === "all-gender") {
        document.getElementById("boy")?.classList.remove("active");
        document.getElementById("girl")?.classList.remove("active");
        document.getElementById("all-gender")?.classList.add("active");
      }
    }
  }
  static genderClickHandler(event: Event) {
    const element = event.target as Element;
    if (element.classList.contains("active")) return;
    window.localStorage.setItem("gender", element.id);
    this.setSelectedGender();
    ItemsList.refreshItemsList();
  }
  static setGendersClickListeners() {
    const boysButton = document.getElementById("boy");
    const girlsButton = document.getElementById("girl");
    const allButton = document.getElementById("all-gender");
    boysButton?.addEventListener("click", (e) => this.genderClickHandler(e));
    girlsButton?.addEventListener("click", (e) => this.genderClickHandler(e));
    allButton?.addEventListener("click", (e) => this.genderClickHandler(e));
  }
  static filterItemsByGender(items: IDakimakura[]) {
    const selectedGender = window.localStorage.getItem("gender");
    if (selectedGender === null || selectedGender === "all-gender")
      return items;
    return items.filter((daki) => daki.gender === selectedGender);
  }

  //material
  static getSelectedMaterials(): string[] {
    const selectedMaterials: string[] = [];
    materials.forEach((material) => {
      if (
        window.localStorage.getItem(material) === "true" ||
        window.localStorage.getItem(material) === null
      )
        selectedMaterials.push(material);
    });
    return selectedMaterials;
  }
  static setSelectedMaterials() {
    const selectedMaterials = this.getSelectedMaterials();
    selectedMaterials.forEach((material) => {
      const checkBox = document.getElementById(material) as HTMLInputElement;
      checkBox.checked = true;
    });
  }
  static allMaterialClickHandler() {
    /* const allButton = document.getElementById("all-material");
    const syntheticBox = document.getElementById("synthetic");
    const cottonBox = document.getElementById("cotton");
    const plushBox = document.getElementById("plush");
    const linenBox = document.getElementById("linen"); */
    const checkBoxes: HTMLInputElement[] = Array.from(
      document.querySelectorAll(".material-checkbox")
    );
    console.log(checkBoxes);
    checkBoxes.forEach((checkBox) => {
      checkBox.checked = true;
      window.localStorage.setItem(checkBox.id, "true");
    });
    ItemsList.refreshItemsList();
  }
  static materialCheckBoxClickHandler(event: Event) {
    const checkBox = event.target as HTMLInputElement;
    if (checkBox.checked) window.localStorage.setItem(checkBox.id, "true");
    else window.localStorage.setItem(checkBox.id, "false");
    ItemsList.refreshItemsList();
  }
  static setMaterialClickListeners() {
    const allButton = document.getElementById("all-material");
    const checkBoxes = document.querySelectorAll(".material-checkbox");
    checkBoxes.forEach((checkBox) =>
      checkBox.addEventListener("click", (e) =>
        this.materialCheckBoxClickHandler(e)
      )
    );
    allButton?.addEventListener("click", this.allMaterialClickHandler);
  }
  static filterItemsByMaterial(items: IDakimakura[]) {
    const selectedMaterials = this.getSelectedMaterials();
    return items.filter((item) => {
      if (selectedMaterials.includes(item.material)) return true;
    });
  }
  //only popular
  static onlyPopularClickHandler(event: Event) {
    const onlyPopularBox = event.target as HTMLInputElement;
    if (onlyPopularBox.checked)
      window.localStorage.setItem("only-popular", "true");
    else window.localStorage.setItem("only-popular", "false");
    ItemsList.refreshItemsList();
  }
  static setOnlyPopularClickListener() {
    document
      .getElementById("only-popular")
      ?.addEventListener("click", (e) => this.onlyPopularClickHandler(e));
  }
  static setOnlyPopular() {
    const onlyPopular: HTMLInputElement = document.getElementById(
      "only-popular"
    ) as HTMLInputElement;
    if (window.localStorage.getItem("only-popular") === "true")
      onlyPopular.checked = true;
    else onlyPopular.checked = false;
  }
  static filterByPopular(items: IDakimakura[]) {
    const isOnlyPopularChecked = window.localStorage.getItem("only-popular");
    if (isOnlyPopularChecked === "true")
      return items.filter((items) => items.isPopular === "Yes");
    else return items;
  }
  //common
  static setSelected() {
    this.setSelectedColors();
    this.setSelectedGender();
    this.setSelectedMaterials();
    this.setOnlyPopular();
  }
  static setListeners() {
    this.setColorsEventListeners();
    this.setResetListener();
    this.setGendersClickListeners();
    this.setMaterialClickListeners();
    this.setOnlyPopularClickListener();
  }
  //main
  static initializeFilters() {
    this.setSelected();
    this.setListeners();
  }
}

export default Filter;
