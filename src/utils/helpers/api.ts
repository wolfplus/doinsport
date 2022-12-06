import axios, { AxiosRequestConfig, Method } from "axios";

/**
 * API call method
 *
 * @param path - API route
 * @param method - HTTP type method
 * @param config - Header configs
 * @returns Returns a promise
 */
export const callAPI = async <R>(
  path: string,
  method: Method,
  config: Partial<AxiosRequestConfig> = {}
): Promise<any> => {
  const res = await axios({
    url: `${process.env.VUE_APP_ROOT_API}${path}`,
    method,
    ...config,
  });

  return res.data;
};
