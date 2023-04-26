import React from "react";
import MFE1 from "./components/MFE1App";
import MFE2 from "./components/MFE2App";

export default () => {
  const dataMFE1 = "Message from Container for MFE1";

  const dataMFE2 = "Message from Container for MFE2";

  return (
    <>
      <h1>Container App</h1>
      <MFE1 data={dataMFE1}></MFE1>

      <MFE2 data={dataMFE2}></MFE2>
    </>
  );
};
