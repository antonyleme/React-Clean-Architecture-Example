import { ResponseType } from 'axios';

type HttpRequest = {
  url: string;
  headers?: {
    [key: string]: string;
  };
  responseType?: ResponseType;
};

type HttpGetRequest = HttpRequest & {
    responseType?: string
};

type HttpDeleteRequest = HttpRequest;
type HttpPostRequest = HttpRequest & {
  body: object;
};
type HttpPatchRequest = HttpRequest & {
  body: object;
};
type HttpPutRequest = HttpRequest & {
  body: object;
};

type HttpResponse<T = any> = {
  statusCode: number;
  data?: T;
};

export type HttpClient = {
  get: (params: HttpGetRequest) => Promise<HttpResponse>;
  delete: (params: HttpDeleteRequest) => Promise<HttpResponse>;
  post: (params: HttpPostRequest) => Promise<HttpResponse>;
  patch: (params: HttpPatchRequest) => Promise<HttpResponse>;
  put: (params: HttpPutRequest) => Promise<HttpResponse>;
};
