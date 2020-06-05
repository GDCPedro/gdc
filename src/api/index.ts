import request from "../utils/request"

class Service {
  getHello(): Promise<any> {
    return request.get("/hello");
  }
}

export default new Service();