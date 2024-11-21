import _axios, { AxiosInstance } from "axios";
import { HttpClient } from "../../../data/interfaces/http-client.interface";

const defaultAxiosInstance = _axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

interface AxiosClient {
  (axios?: AxiosInstance): HttpClient;
}

export const axiosClient: AxiosClient = (axios = defaultAxiosInstance) => {
  const post: HttpClient["post"] = async ({ url, body, headers }) => {
    const response = await axios.post(url, body, { headers });

    return {
      statusCode: response.status,
      data: response.data,
    };
  };
  const get: HttpClient["get"] = async ({ url, headers, responseType }) => {
    const response = await axios.get(url, {
      headers,
      responseType: responseType ?? "json",
    });

    return {
      statusCode: response.status,
      data: response.data,
    };
  };
  const patch: HttpClient["patch"] = async ({ url, body, headers }) => {
    const response = await axios.patch(url, body, { headers });

    return {
      statusCode: response.status,
      data: response.data,
    };
  };
  const put: HttpClient["put"] = async ({ url, body, headers }) => {
    const response = await axios.put(url, body, { headers });

    return {
      statusCode: response.status,
      data: response.data,
    };
  };
  const del: HttpClient["delete"] = async ({ url, headers }) => {
    const response = await axios.delete(url, { headers });

    return {
      statusCode: response.status,
      data: response.data,
    };
  };

  return {
    post,
    get,
    patch,
    put,
    delete: del,
  };
};
