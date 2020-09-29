import React from "react";
import styled from "styled-components";

import {
  MatrixType,
  Props,
} from "./types";

import {
  GridTable
} from "./components/GridTable";

const Layout = styled.div`
  background-color: #ffffff;
  font-family: "Helvetica Neue",
    Arial,
    "Hiragino Kaku Gothic ProN",
    "Hiragino Sans",
    Meiryo,
    sans-serif;
`;

export const Index: React.FC<Props> = ({data, options}) => {
  if (typeof data === "undefined") {
    data = [];
  }
  if (typeof data[0] === "undefined") {
    data.push([]);
  }
  if (typeof options === "undefined") {
    options = {};
  }
  return (<Layout>
    <GridTable
      data={data}
      options={options}
    />
  </Layout>);
};

export default Index;
