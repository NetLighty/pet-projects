import "./header.scss";

export class Header {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  itemClick() {
    //console.log("clicked");
  }
}

export default Header;
