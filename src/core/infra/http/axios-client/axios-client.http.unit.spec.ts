import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { axiosClient } from './axios-client.http';

const mock = new MockAdapter(axios);
const http = axiosClient(axios);

const url = 'my_url';
const headers = {
  x: 'xyz',
};
const body = {
  data: '123',
};

describe('Axios http client', () => {
  describe('GET method', () => {
    const spy = jest.spyOn(axios, 'get');

    it('Should make a GET call with correct url and headers return success response', async () => {
      mock.onGet(url).reply(200, {});
      await http.get({ url, headers });
      expect(spy).toHaveBeenLastCalledWith(url, {
        headers,
        responseType: 'json',
      });
    });

    it('Should make a GET call and return correct response data', async () => {
      const data = { success: true };
      const statusCode = 200;
      mock.onGet(url).reply(statusCode, data);
      const result = await http.get({ url });
      expect(result).toEqual({
        data,
        statusCode,
      });
    });

    it('Should make a GET call and throw error', async () => {
      mock.onGet(url).reply(400);
      await expect(() => http.get({ url, headers })).rejects.toThrow();
    });
  });

  describe('POST method', () => {
    const spy = jest.spyOn(axios, 'post');

    it('Should make a POST call with correct url, body and headers return success response', async () => {
      mock.onPost(url).reply(200);
      await http.post({ url, body, headers });
      expect(spy).toHaveBeenLastCalledWith(url, body, { headers });
    });

    it('Should make a POST call and return correct response data', async () => {
      const data = { success: true };
      const statusCode = 200;
      mock.onPost(url).reply(statusCode, data);
      const result = await http.post({ url, body });
      expect(result).toEqual({
        data,
        statusCode,
      });
    });

    it('Should make a POST call and throw error', async () => {
      mock.onPost(url).reply(400);
      await expect(() => http.post({ url, body, headers })).rejects.toThrow();
    });
  });

  describe('PUT method', () => {
    const spy = jest.spyOn(axios, 'put');

    it('Should make a PUT call with correct url and headers return success response', async () => {
      mock.onPut(url).reply(200, {});
      await http.put({ url, body, headers });
      expect(spy).toHaveBeenLastCalledWith(url, body, { headers });
    });

    it('Should make a PUT call with correct url and return correct response data', async () => {
      const data = { success: true };
      const statusCode = 200;
      mock.onPut(url).reply(statusCode, data);
      const result = await http.put({ url, body });
      expect(result).toEqual({
        data,
        statusCode,
      });
    });

    it('Should make a PUT call and throw error', async () => {
      mock.onPut(url).reply(400);
      await expect(() => http.put({ url, body, headers })).rejects.toThrow();
    });
  });

  describe('PATCH method', () => {
    const spy = jest.spyOn(axios, 'patch');

    it('Should make a PATCH call with correct url and headers return success response', async () => {
      mock.onPatch(url).reply(200, {});
      await http.patch({ url, body, headers });
      expect(spy).toHaveBeenLastCalledWith(url, body, { headers });
    });

    it('Should make a PATCH call with correct url and return correct response data', async () => {
      const data = { success: true };
      const statusCode = 200;
      mock.onPatch(url).reply(statusCode, data);
      const result = await http.patch({ url, body });
      expect(result).toEqual({
        data,
        statusCode,
      });
    });

    it('Should make a PATCH call and throw error', async () => {
      mock.onPatch(url).reply(400);
      await expect(() => http.patch({ url, body, headers })).rejects.toThrow();
    });
  });

  describe('DELETE method', () => {
    const spy = jest.spyOn(axios, 'delete');

    it('Should make a DELETE call with correct url and headers return success response', async () => {
      mock.onDelete(url).reply(200);
      await http.delete({ url, headers });
      expect(spy).toHaveBeenLastCalledWith(url, { headers });
    });

    it('Should make a DELETE call with correct url and return correct response data', async () => {
      const data = { success: true };
      const statusCode = 200;
      mock.onDelete(url).reply(statusCode, data);
      const result = await http.delete({ url });
      expect(result).toEqual({
        data,
        statusCode,
      });
    });

    it('Should make a DELETE call and throw error', async () => {
      mock.onDelete(url).reply(400);
      await expect(() => http.delete({ url, headers })).rejects.toThrow();
    });
  });
});
