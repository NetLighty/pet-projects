import Filter from "../filters/filters";
import ItemsList from "../itemsList/itemsList";
import Search from "../search/search";
import Sort from "../sort/sort";
import StorageController from "./storageController";

export class PageLoader {
  static loadPage() {
    //ItemsList.fillPage(dakimakuras);
    Sort.setEventListeners();
    Filter.initializeFilters();
    Search.addSearchListeners();
    StorageController.setCleanStorageButtonListener();
    ItemsList.refreshItemsList();
  }
}

export default PageLoader;
