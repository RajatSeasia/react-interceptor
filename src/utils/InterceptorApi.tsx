// Importing necessary modules and components
import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = import.meta.env.VITE_BASE_URL
 
const axiosAPI = axios.create({
  baseURL: BASE_URL,
});

/**
 * Interceptor to append the bearer token to the header in outgoing requests.
 */
axiosAPI.interceptors.request.use(
  (config:any) => {
    // Retrieve the access token from secure local storage
    const userdata = localStorage.getItem("access_token");
    
    // If an access token is available, add it to the request headers

    if (userdata && config?.token===true)  {
      config.headers["Authorization"] = `Bearer ${userdata}`;

    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * Interceptor to handle responses and perform actions based on the response or error.
 */
axiosAPI.interceptors.response.use(
  (response) => {
    // Return the response as is
    console.log(response,"AllApisResponse")
    return response;
  },
  (error) => {
    // If the error response indicates ""Token expired""
    // console.log(error?.response?.data?.message,"errorMessage") 
    if (error?.response?.data?.message == "Token expired") {

      // Clear secure local storage and regular local storage
      localStorage?.clear();

      // Show a Toast notification with the error message
      // ToastifyShow(error?.response?.data?.message, "error");

      // Reload the window to redirect the user to the login page
      window.location.reload();
    }
    // Reject the promise with the error
    return Promise.reject(error);
  }
);

export const getToast = (type:any, message:any) => {
  switch (type) {
    case "success":
      toast.success(message);
      break;
    case "error":
      toast.error(message);
      break;
    case "warning":
      toast.warning(message);
      break;
    default:
  }
};
// Export the configured axios instance
export default axiosAPI;
