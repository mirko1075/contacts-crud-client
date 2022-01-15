import axios from "axios";
class ApiService {
  constructor() {
    this.contactsSource = axios.create({
      baseURL: process.env.REACT_APP_API_ROOT,
      withCredentials: false,
    });
  }

  async getContacts() {
    const result = await this.contactsSource.get(`/contact-list`);
    return result.data? result.data: [];
  }

  async getContact(id) {
    const result = await this.contactsSource.get(`/contact-list/${id}`);
    return result.data? result.data: null;
  }

  async addContact(contactObj) {
    const result = await this.contactsSource.post("/contact-list", contactObj);
    return result.data? result: [];
  }

  async editContact(contactObj) {
    const result = await this.contactsSource.put("/contact-list", contactObj);
    return result.data? result: [];
  }

  async deleteContact(id) {
    const result = await this.contactsSource.delete("/contact-list",{ data: { id:id }} );
    return result.data? result: [];
  }
}

const apiService = new ApiService();

export default apiService;
