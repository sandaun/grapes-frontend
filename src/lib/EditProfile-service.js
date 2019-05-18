import axios from "axios";

class EditService {
  constructor() {
    this.edit = axios.create({
      baseURL: process.env.REACT_APP_API_PUBLIC_URL,
      withCredentials: true
    })
  }

  getProfile() {
    return this.edit.get(`/profile`)
      .then(({ data }) => data);
  }
  
  updateProfile(user) {
    const { username, name, email } = user;
    return this.edit.post('/profile/update', { username, name, email })
      .then(({ data }) => data);
  }
}

const edit = new EditService();

export default edit