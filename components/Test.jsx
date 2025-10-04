import React from "react";

const Test = () => {
  const dat = fetch("http://localhost:3000/api/users").then((res) =>
    res.json()
  );
  console.log(dat);
  return <div>Test</div>;
};

export default Test;
