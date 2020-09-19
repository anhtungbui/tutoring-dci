export default class RandomDog {
  constructor(name) {
    this.name = name;
  }
  async getData() {
    const url = 'https://dog.ceo/api/breeds/image/random';

    const res = await fetch(url);
    const data = await res.json();
    return data;
  }

  sayHi() {
    return `Hello ${this.name}`;
  }

  saveToLS(message) {
    localStorage.setItem('demo', message);
    return 'A new localStorage item has been saved';
  }

  readFromLS() {
    return localStorage.getItem('demo');
  }

  clearLS() {
    localStorage.clear();
  }
}
