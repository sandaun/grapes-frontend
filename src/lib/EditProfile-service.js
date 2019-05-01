import axios from "axios";

class EditService {
  constructor() {
    this.edit = axios.create({
      baseURL: process.env.REACT_APP_API_PUBLIC_URL,
      withCredentials: true
    })
  }
  
  updateProfile(user) {
    const { username, email } = user;
    return this.edit.post('/profile/update', { username, email })
      .then(({ data }) => data);
  }
}

const edit = new EditService();

export default edit