import request from "../utils/request"

class Service {
  getHello(name: string): Promise<any> {
    return request.get(`/hello?name=${name}`);
  }

  handleRegister(params: {
    name: string;
    pswd: string;
  }): Promise<any> {
    return request.post("/register", params)
  }
}

export default new Service();