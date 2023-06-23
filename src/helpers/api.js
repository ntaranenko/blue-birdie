import axios from "axios";

const MOCKAPI_URL = "https://649597b1b08e17c917925c81.mockapi.io/users";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(MOCKAPI_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
