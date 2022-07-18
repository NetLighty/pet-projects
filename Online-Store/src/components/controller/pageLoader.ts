import Cart from "../cart/cart";
import Filter from "../filters/filters";
import dakimakuras from "../itemsList/itemsDB";
import ItemsList from "../itemsList/itemsList";
import Sort from "../sort/sort";

export class PageLoader {
  static loadPage() {
    //ItemsList.fillPage(dakimakuras);
    Sort.setEventListeners();
    Filter.setColorsEventListeners();
    Filter.setSelectedColors();
    ItemsList.refreshItemsList();
  }
}

export default PageLoader;
