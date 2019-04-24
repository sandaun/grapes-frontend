import axios from "axios";

class Wine {
  constructor() {
    this.wine = axios.create({
      baseURL: process.env.REACT_APP_API_PUBLIC_URL,
      withCredentials: true
    });
  }

  search(wine) {
    const { item } = wine;
    console.log(item, typeof(item));
    return this.wine
      .get('/wine/foodlist/?wine=' + item)
      .then(({ data }) => data);
  }

// //Just for test purposes with the backend
//   test() {
//     return this.auth.get("/auth/test").then(response => response.data);
//   }
}

const wine = new Wine();

export default wine;
