import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api", // backend base URL
});

export const createConfig = (payload) => API.post("/configurations/", payload);
export const getConfigById = (id) => API.get(`/configurations/${id}`);
export const updateConfig = (id, remark) => API.put(`/configurations/update/${id}`, { remark });
export const deleteConfig = (id) => API.delete(`/configurations/delete/${id}`);
