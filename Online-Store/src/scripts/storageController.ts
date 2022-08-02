export class StorageController {
  static cleanStorage() {
    window.localStorage.clear();
  }

  static setCleanStorageButtonListener() {
    document
      .querySelector(".clean-storage-button")
      ?.addEventListener("click", this.cleanStorage);
  }
}

export default StorageController;
