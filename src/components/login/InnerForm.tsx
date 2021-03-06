import React from "react";
import { useHistory } from "react-router";
import { Form, Input, Button, Checkbox } from "antd";
import { Store } from "antd/lib/form/interface";

/**
 * 登录接口
 */
import service from "../../api/index";
import { useRecoilState } from "recoil";
import { filteredTokenState } from "../../store/index";
import Crypto from "../../utils/crypto";

const crypto = new Crypto();

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const onFinishFailed = () => {
  console.log("onFinishFailed");
};

/**
 * 测试按钮
 */
const onTest = () => {
  service.getProfile("郭东超");
};

interface Props {
  parent: any;
}

export default function InnerForm({ parent }: Props) {
  // 获取token
  const [token, setToken] = useRecoilState(filteredTokenState);

  // 获取路由对象
  const history = useHistory();

  /**
   * 确认登录
   * @param form
   */
  const onFinish = (form: Store) => {
    const encrypto = crypto.encryptoStr(form.password);
    console.log(encrypto);
    console.log(crypto.decryptoStr(encrypto));
    service
      .login({
        username: form.username,
        password: encrypto,
      })
      .then((res) => {
        // 登录成功了,进行处理

        setToken(res.access_token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * 注册
   */
  const onRegister = () => {
    console.log("onRegister");
    // 改变title
    history.push("/register");
  };

  return (
    <div>
      <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please enter username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Login
          </Button>

          <Button
            className="register-btn"
            htmlType="button"
            onClick={onRegister}
          >
            Register
          </Button>

          <Button className="register-btn" htmlType="button" onClick={onTest}>
            Test
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
