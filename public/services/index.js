import axios from "axios";
const axiosConfiguration = () =>
axios.create({
  baseURL: `${process.env.protocol}${process.env.baseUrl}`,
  timeout: 30000,
});
const axiosInstance = axiosConfiguration();
axiosInstance.interceptors.request.use(async (config) => {
  config.headers = {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  };
  const token = localStorage.getItem('token');
  if(token){
    config.headers['Authorization'] = `Bearer ${token}`;
  } 
  return config;
});

axiosInstance.interceptors.response.use(
  async (response) => {
    return {"status" : response.status,data:response.data};
  },
  (err) => {
    if (err?.response?.status == 500) {
      // window.location = "/404";
    }
    if (err?.response?.status == 401) {
      window.location = "/login";
    }

    return err.response;
  }
);
export default axiosInstance;
