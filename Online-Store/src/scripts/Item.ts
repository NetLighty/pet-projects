export default class Item {
  title: string;
  date: Date;
  constructor(title: string) {
    this.title = title;
    this.date = new Date();
  }

  toString() {
    return JSON.stringify({
      title: this.title,
      date: this.date.toJSON(),
    });
  }
}
