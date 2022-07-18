import Filter from "../filters/filters";
import { colors } from "../itemsList/itemsDB";
import ItemsList from "../itemsList/itemsList";

export class FiltersController {
  static resetFilters() {
    //gender
    //material
    colors.forEach((color) => {
      window.localStorage.removeItem(color);
    });
    Filter.setSelectedColors();
    ItemsList.refreshItemsList();
  }
}

export default FiltersController;
