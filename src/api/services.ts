import http from "./api";
import type { Count } from "./types";

class Service<T> {

  application: string;
  endpoint: string;

  constructor(application: string, endpoint: string) {
    this.application = application;
    this.endpoint = endpoint;
  }

  list(params?: Object): Promise<Array<T>> {
    return http(this.application).get(`/${this.endpoint}`, { params: params }).then(({ data }: any) => { return data.results });
  }
  get(id: number): Promise<T> {
    return http(this.application).get(`/${this.endpoint}/${id}`).then(({ data }: any) => { return data });
  }
  count(params?: Object): Promise<Count> {
    return http(this.application).get(`/${this.endpoint}/count/`, { params: params }).then(({ data }: any) => { return data });
  }
}

export {
  Service
};
