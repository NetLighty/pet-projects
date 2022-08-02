import Filter from "./filters";
import ItemsList from "./itemsList";
import Search from "./search";
import Sort from "./sort";
import StorageController from "./storageController";

export class PageLoader {
  static loadPage() {
    Sort.setEventListeners();
    Filter.initializeFilters();
    Search.addSearchListeners();
    StorageController.setCleanStorageButtonListener();
    ItemsList.refreshItemsList();
  }
}

export default PageLoader;
