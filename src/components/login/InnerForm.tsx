import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { Store } from "antd/lib/form/interface";
/**
 * 登录接口
 */
import service from "../../api/index";

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

interface Props {}
interface State {
  username: string;
  password: string;
}

class InnerForm extends Component<Props, State> {
  state: State = {
    username: "",
    password: "",
  };

  onFinish(form: Store) {
    service
      .login({
        username: form.username,
        password: form.password,
      })
      .then((res) => {
        // 登录成功了,进行处理
        console.log(res);
        localStorage.setItem("tokenState", res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /**
   * 注册
   */
  onRegister() {
    console.log("onRegister");
  }

  render() {
    return (
      <div>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
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
              onClick={this.onRegister}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default InnerForm;
