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

  /**
   * 验证一下jwt策略
   * @param username
   * @param password
   */
  getProfile(username: string, password: string): Promise<any> {
    return request.post("/profile", { username, password });
  }
}

export default new Service();
