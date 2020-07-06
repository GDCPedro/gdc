import React from "react";
import { Form, Input, Button } from "antd";
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

interface Props {
  parent: any;
}

export default function InnerForm({ parent }: Props) {
  // 获取token
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [token, setToken] = useRecoilState(filteredTokenState);

  /**
   * 确认登录
   * @param form
   */
  const onRegister = (form: Store) => {
    service
      .handleRegister({
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

  return (
    <div>
      <Form
        {...layout}
        name="basic"
        initialValues={{ username: "", password: "" }}
        onFinish={onRegister}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please enter username!" }]}
        >
          <Input autoComplete="false" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter password!" }]}
        >
          <Input.Password autoComplete="false" />
        </Form.Item>

        {/* <Form.Item
          style={{ display: `${registerState ? "none" : "block"}` }}
          {...tailLayout}
          name="remember"
          valuePropName="checked"
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Register Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
