import Filter from "../filters/filters";
import ItemsList from "../itemsList/itemsList";

export class FiltersController {
  static resetFilters() {
    Filter.setAllColorsTrue();
    Filter.setAllMaterialsTrue();
    window.localStorage.setItem("gender", "all-gender");
    window.localStorage.setItem("only-popular", "false");
    window.localStorage.setItem("input-0", "0");
    window.localStorage.setItem("input-1", "10001");
    Filter.setSelected();
    ItemsList.refreshItemsList();
  }
}

export default FiltersController;
