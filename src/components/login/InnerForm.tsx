import React, { useState } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Store } from "antd/lib/form/interface";
/**
 * 登录接口
 */
import service from "../../api/index";
import { useRecoilState } from "recoil";
import { filteredTokenState } from "../../store/index";

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

interface Props {
  parent: any;
}

export default function InnerForm({ parent }: Props) {
  // 获取token
  const [token, setToken] = useRecoilState(filteredTokenState);

  // 区分是注册还是登录
  const [registerState, setRegisterState] = useState(false);

  /**
   * 确认登录
   * @param form
   */
  const onFinish = (form: Store) => {
    service
      .login({
        username: form.username,
        password: form.password,
      })
      .then((res) => {
        // 登录成功了,进行处理
        console.log(res);
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
    // service.getProfile("李如萍", "199408");
    console.log("onRegister");
    // 改变title
    parent.setState({ title: "Register" });
    setRegisterState(true);
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

        <Form.Item
          style={{ display: `${registerState ? "none" : "block"}` }}
          {...tailLayout}
          name="remember"
          valuePropName="checked"
        >
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
        </Form.Item>
      </Form>
    </div>
  );
}
