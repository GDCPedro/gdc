import React, { ReactElement } from "react";
import { GithubOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { THEME_COLOR as color } from "../../common/globalVars";

interface Props {}

export default function Author({}: Props): ReactElement {
  const text = "查看网页源代码";

  return (
    <div className="github-link">
      <a href="https://github.com/GDCPedro/gdc" target="blank">
        <Tooltip placement="bottomLeft" color="blue" title={text}>
          <GithubOutlined style={{ color }} className="github-link__icon" />
        </Tooltip>
      </a>
    </div>
  );
}
