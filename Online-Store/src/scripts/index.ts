import Header from "../components/header/header";
import Filter from "../components/filters/filters";
import Dakimakura from "../components/dakimakura/dakimakura";
import ItemsList from "../components/itemsList/itemsList";
import dakimakuras from "../components/itemsList/itemsDB";
import Cart from "../components/cart/cart";
import PageLoader from "../components/controller/pageLoader";

import "../global.scss";
import "../components/itemsList/itemsList.scss";
import "../components/cart/alert.scss";
import Sort from "../components/sort/sort";
import "../components/footer/footer.scss";
import "../components/search/search.scss";

const header = new Header("Softy");
const filter = new Filter();
const dakimakura = new Dakimakura();
const itemsList = new ItemsList(dakimakuras);

PageLoader.loadPage();
