import axios from "axios";

const request = async (options) => {
  const {
    method = "get",
    baseURL = process.env.REACT_APP_BASE_URL,
    url,
    headers,
    params,
    data,
  } = options;

  const config = {
    method,
    baseURL,
    url,
    headers,
    params,
    data,
  };

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default request;
