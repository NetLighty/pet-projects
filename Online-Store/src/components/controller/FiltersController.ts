import Filter from "../filters/filters";
import { colors, materials } from "../itemsList/itemsDB";
import ItemsList from "../itemsList/itemsList";

export class FiltersController {
  static resetFilters() {
    //gender
    //material
    Filter.setAllColorsTrue();
    Filter.setAllMaterialsTrue();
    window.localStorage.setItem("gender", "all-gender");
    window.localStorage.setItem("only-popular", "false");
    Filter.setSelected();
    ItemsList.refreshItemsList();
  }
}

export default FiltersController;
