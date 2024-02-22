import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const serverBaseUrl = process.env.REACT_APP_API_URL;

const PublicApi = axios.create({
  baseURL: serverBaseUrl,
});
const PrivateApi = axios.create({
  baseURL: serverBaseUrl,
  withCredentials: true,
});

PrivateApi.interceptors.request.use(
  async (config) => {
    const user = localStorage.getItem('user');
    if (user !== null) {
      const { accessToken } = JSON.parse(user);

      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

PrivateApi.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { response } = error;

    if (response && response.status === 401) {
      try {
        const user = localStorage.getItem('user');

        if (user !== null) {
          const { refreshToken, ...rest } = JSON.parse(user);

          if (refreshToken) {
            const newAccessToken = await refreshAccessToken(refreshToken);

            localStorage.setItem(
              'user',
              JSON.stringify({
                ...rest,
                refreshToken,
                accessToken: newAccessToken,
              })
            );
            const originalRequest = error.config;
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

            return axios(originalRequest);
          }

          // Decode the refresh token to check its expiration time
          // const decodedToken = jwtDecode(refreshToken);

          // if (
          //   decodedToken &&
          //   decodedToken.exp &&
          //   decodedToken.exp * 1000 < Date.now()
          // ) {
          //   // If the refresh token has expired
          //   console.log("Refresh token has expired");
          //   // localStorage.removeItem("user");
          //   // localStorage.removeItem("accessToken");
          //   // localStorage.removeItem("refreshToken");
          //   // return Promise.reject("Refresh token has expired");
          // }
        }
      } catch (refreshError) {
        localStorage.removeItem('user');
        console.log('Error refreshing access token:', refreshError);
      }
    }
    // console.log("response,", response);

    return Promise.reject(error);
  }
);

async function refreshAccessToken(refreshToken) {
  try {
    // Make a request to your server's refresh token endpoint
    const response = await PublicApi.post(`${serverBaseUrl}/jwt/refreshToken`, {
      refreshToken: refreshToken,
    });

    const newAccessToken = response.data.accessToken;

    // Return the new access token
    return newAccessToken;
  } catch (error) {
    // console.log("Error refreshing access token:", error);
    throw error;
  }
}
export { PublicApi, PrivateApi };
