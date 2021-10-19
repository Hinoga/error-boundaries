import React, { useState } from "react";

const Content = () => {
  const [data, setData] = useState({
    name: "React",
    version: "17.0.0",
  });

  return (
    <div>
      <p>
        For this mini-project we are using <b>{data.name}</b> in its version{" "}
        <b>{data.version}</b>
      </p>
      <p>
        By <button onClick={() => setData(undefined)}>Clicking here</button> the
        component state would set to undefined
      </p>
    </div>
  );
};

export default Content;
