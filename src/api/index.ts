import request from "../utils/request";

class Service {
  /**
   * 登录接口
   * @param params
   */
  login(params: { username: string; password: string }): Promise<any> {
    return request.post("/user/login", params);
  }

  handleRegister(params: { username: string; password: string }): Promise<any> {
    return request.post("/user/register", params);
  }

  /**
   * 验证一下jwt策略
   * @param username
   * @param password
   */
  getProfile(username: string): Promise<any> {
    return request.post("/user/profile", { username });
  }
}

export default new Service();
