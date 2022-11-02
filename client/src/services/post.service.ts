import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/posts";

const getAllPublicPosts = () => {
  return axios.get(API_URL + "/public");
};

const getAllPrivatePosts = () => {
  return axios.get(API_URL + "/private", { headers: authHeader() });
};

const getAllDetails = () => {
  return axios.get("http://localhost:5000/data/details", {headers: authHeader() });
}

const getPieChart = () => {
  return axios.get("http://localhost:5000/charts/piechart", {headers: authHeader() });
}

const getBarChart = () => {
  return axios.get("http://localhost:5000/charts/barchart", {headers: authHeader()});
}

const getAreaChart = () => {
  return axios.get("http://localhost:5000/charts/areachart", {headers: authHeader()});
}

const getRadialChart = () => {
  return axios.get("http://localhost:5000/charts/radialchart", {headers: authHeader()});
}

const getDownload = () => {
  return axios.get("http://localhost:5000/data/download", {headers: authHeader()});
}

const postService = {
  getAllPublicPosts,
  getAllPrivatePosts,
  getAllDetails,
  getPieChart,
  getBarChart, 
  getAreaChart,
  getRadialChart,
  getDownload,
};

export default postService;