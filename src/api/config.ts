import axios from "axios";

export default (history: any = null) => {
  const baseURL = process.env.BASE_URL;
  console.log("Base URL", process.env.BASE_URL);

  let headers = {
    Authorization: "",
  };
  const token = localStorage.getItem("pms-token");

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const authInstance = axios.create({
    baseURL: baseURL,
    headers,
  });

  authInstance.interceptors.response.use(
    (response) =>
      new Promise((resolve, reject) => {
        resolve(response);
      }),
    (error) => {
      if (!error.response) {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }

      if (error.response.status === 403) {
        localStorage.removeItem("pms-token");

        if (history) history.push("/login");
        else window.location.href = "/login";
      } else {
        return new Promise((resolve, reject) => {
          reject(error);
        });
      }
    }
  );

  return authInstance;
};
