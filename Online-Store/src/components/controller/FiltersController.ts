import Filter from "../filters/filters";
import { colors, materials } from "../itemsList/itemsDB";
import ItemsList from "../itemsList/itemsList";

export class FiltersController {
  static resetFilters() {
    //gender
    //material
    colors.forEach((color) => {
      window.localStorage.removeItem(color);
    });
    materials.forEach((material) => {
      window.localStorage.setItem(material, "true");
    });
    window.localStorage.setItem("gender", "all-gender");
    Filter.initializeFilters();
    ItemsList.refreshItemsList();
  }
}

export default FiltersController;
