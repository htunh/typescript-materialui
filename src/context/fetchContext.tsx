import { createContext } from 'react';
import axios, { AxiosInstance } from 'axios';
import { useNavigate } from 'react-router-dom';

interface FetchContextProps {
  authFetch: AxiosInstance;
}
const FetchContext = createContext({} as FetchContextProps);

function FetchProvider({ children }: any): any {
  const navigate = useNavigate();

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_SERVER,
  });

  api.interceptors.request.use(
    (config) => {
      const cfg = config;
      return cfg;
    },
    (error) => Promise.reject(error)
  );

  api.interceptors.response.use(
    (response) => response,
    (error) => {
      const code = error && error.response ? error.response.status : 0;
      if (code === 401) {
        navigate('/');
      }
      return Promise.reject(error);
    }
  );

  const authFetch = api;

  return (
    <FetchContext.Provider
      value={{
        authFetch,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
}

export { FetchContext, FetchProvider };
