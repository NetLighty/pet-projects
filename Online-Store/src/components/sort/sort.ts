import dakimakuras from "../itemsList/itemsDB";
import ItemsList from "../itemsList/itemsList";

export class Sort {
  static allItems: NodeListOf<Element> =
    document.querySelectorAll(".dakimakura");
  static notHiddenItems = Array.from(Sort.allItems).filter(
    (item) => !item.classList.contains(".hidden")
  );
  static sortByPrice(type: string) {
    const sortedArray = Array.from(Sort.notHiddenItems).sort(function (a, b) {
      const aPrice = dakimakuras.filter(
        (dakimakura) => dakimakura.name === a.id
      )[0].price;
      const bPrice = dakimakuras.filter(
        (dakimakura) => dakimakura.name === b.id
      )[0].price;
      if (type === "fromLowestToHighest") return aPrice - bPrice;
      else return bPrice - aPrice;
    });
    console.log(sortedArray);
    ItemsList.refreshItemsList(sortedArray);
  }
  static sortByName() {
    return "";
  }
}

export default Sort;
