import Item from "./Item";
import Header from "../components/header/header";
import Filter from "../components/filters/filters";
import "../global.scss";

const item = new Item("dakimakura");
const header = new Header("Softy");
const filter = new Filter();

console.log("Item to String: ", item.toString());
