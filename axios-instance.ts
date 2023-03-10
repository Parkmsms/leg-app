import axios, { AxiosRequestHeaders } from 'axios';
import Axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig, isAxiosError } from 'axios';

const baseURL = 'https://0giri.com/api';

export const request = Axios.create({ baseURL });

export const axiosInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  const source = Axios.CancelToken.source();
  const promise = request({ ...config, cancelToken: source.token }).then(({ data }) => data);
  request.interceptors.request.use(onRequest);
  request.interceptors.response.use(onResponse, onErrorResponse);
  // @ts-ignore
  promise.cancel = () => source.cancel('Query was cancelled by React Query');
  return promise;
};

export type ErrorType<Error> = AxiosError<Error>;

const onRequest = (config: InternalAxiosRequestConfig<any>): InternalAxiosRequestConfig<any> => {
  const { method, url } = config;
  console.log(`🚀 [API] ${method?.toUpperCase()} ${url} | Request`);
  return config;
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  const {
    config: { method, url },
    status,
  } = response;
  console.log(`🚚 [API] ${method?.toUpperCase()} ${url} | Response ${status}`);
  return response;
};

const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
  const { message, name } = error;

  if (isAxiosError(error)) {
    console.log(`🚨 [API] ${name} | ${message}`);
  } else {
    console.log(`🚨 [API] Not axios error | ${message}`);
  }
  return Promise.reject(error);
};

export const setAccessToken = (accessToken: string) =>
  request.interceptors.request.use(
    config => ({
      ...config,
      headers: accessToken
        ? ({ ...config.headers, Authorization: `Bearer ${accessToken}` } as AxiosRequestHeaders)
        : config.headers,
    }),
    err => {
      console.warn(err);
    },
  );

export const removeAccessToken = () =>
  request.interceptors.request.use(config => {
    delete config.headers.Authorization;
    return config;
  });
