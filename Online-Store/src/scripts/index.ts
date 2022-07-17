import Item from "./Item";
import Header from "../components/header/header";
import Filter from "../components/filters/filters";
import Dakimakura from "../components/dakimakura/dakimakura";
import ItemsList from "../components/itemsList/itemsList";
import dakimakuras from "../components/itemsList/itemsDB";
import Cart from "../components/cart/cart";

import "../global.scss";
import "../components/itemsList/itemsList.scss";

const item = new Item("dakimakura");
const header = new Header("Softy");
const filter = new Filter();
const dakimakura = new Dakimakura();
const itemsList = new ItemsList(dakimakuras);

itemsList.fillPage(dakimakuras);

console.log("Item to String: ", item.toString());
