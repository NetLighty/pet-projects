class AppController {
  apiUrl: string;

  constructor() {
    this.apiUrl = 'http://127.0.0.1:3000';
  }

  getCars() {
    fetch(this.apiUrl + '/garage').then((response) => {
      return response.json();
    })
      .then((data) => {
        console.log(data);
      });
  }
}

export default AppController;
