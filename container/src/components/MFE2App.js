import { mount } from "mfe2/MFE2App";
import React, { useRef, useEffect } from "react";

export default ({ data }) => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current, { data });
  }, []);

  return <div ref={ref} />;
};
