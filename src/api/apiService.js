import axios from "axios";

const PRODUCTION_API = "https://xpress-rental.onrender.com/api/v1";
// const LOCAL_API = "http://localhost:8001/api/v1";

const apiService = axios.create({
  baseURL: PRODUCTION_API,
  headers: {
    "Content-Type": "application/json",
  },
});

// apiService.interceptors.request.use(
//   (config) => {
//     // logic for authentications, headers etc.
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// apiService.interceptors.response.use(
//   (response) => {
//     // add logic for handling successful responses
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export const getService = async (url, params) => {
  try {
    const response = await apiService.get(url, { params });
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.error || "An error occured");
  }
};

export const postService = async (url, data, headers) => {
  try {
    const response = await apiService.post(url, data, headers);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.error || "An error occured");
  }
};

export const deleteService = async (url) => {
  try {
    const response = await apiService.delete(url);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.error || "An error occured");
  }
};

export const patchService = async (url, data) => {
  try {
    const response = await apiService.patch(url, data);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.error || "An error occured");
  }
};

export const putService = async (url, data, headers) => {
  try {
    const response = await apiService.put(url, data, headers);
    return response.data;
  } catch (err) {
    throw new Error(err.response?.data?.error || "An error occured");
  }
};

export default apiService;
