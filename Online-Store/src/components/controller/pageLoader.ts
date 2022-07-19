import Cart from "../cart/cart";
import Filter from "../filters/filters";
import dakimakuras from "../itemsList/itemsDB";
import ItemsList from "../itemsList/itemsList";
import Search from "../search/search";
import Sort from "../sort/sort";

export class PageLoader {
  static loadPage() {
    //ItemsList.fillPage(dakimakuras);
    Sort.setEventListeners();
    Filter.initializeFilters();
    Search.addSearchListeners();
    ItemsList.refreshItemsList();
  }
}

export default PageLoader;
