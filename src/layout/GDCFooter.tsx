import React, { ReactElement } from "react";

interface Props {
  name?: string;
}

export default function GDCFooter(props: Props): ReactElement {
  console.log(props.name);
  return <div className="gdc-footer">&copy;1994-2020&nbsp;郭东超</div>;
}
