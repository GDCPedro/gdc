import request from "../utils/request";

class Service {
  /**
   * 登录接口
   * @param params
   */
  login(params: { username: string; password: string }): Promise<any> {
    return request.post("/auth/login", params);
  }

  handleRegister(params: { name: string; pswd: string }): Promise<any> {
    return request.post("/register", params);
  }
}

export default new Service();
