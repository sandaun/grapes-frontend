import axios from "axios";

class Pairing {
  constructor() {
    this.pairing = axios.create({
      baseURL: process.env.REACT_APP_API_PUBLIC_URL,
      withCredentials: true
    });
  }

  searchFood(wine) {
    const { item } = wine;
    console.log(item, typeof(item));
    return this.pairing
      .get('/wine/foodlist/?wine=' + item)
      .then(({ data }) => data);
  }

  searchWine(food) {
    const { item } = food;
    console.log(item, typeof(item));
    return this.pairing
      .get('/wine/winelist/?food=' + item)
      .then(({ data }) => data);
  }

}

const pairing = new Pairing();

export default pairing;
