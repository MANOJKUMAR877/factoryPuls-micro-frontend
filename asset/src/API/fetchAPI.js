import axios from "axios";
let baseUrl = "http://localhost:3333/";

const fetchData = async (type = "events") => {
  try {
    let data = await axios.get(`${baseUrl}${type}`);
    return data;
  } catch (error) {
    return error.response;
  }
};
export { fetchData };