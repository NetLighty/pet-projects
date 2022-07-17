import Item from "./Item";
import Header from "../components/header/header";
import Filter from "../components/filters/filters";
import Dakimakura from "../components/dalimakura/dakimakura";
import "../global.scss";

const item = new Item("dakimakura");
const header = new Header("Softy");
const filter = new Filter();
const dakimakura = new Dakimakura();

console.log("Item to String: ", item.toString());
