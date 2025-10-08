import React from "react";

const Test = () => {
  const dat = fetch("https://commserve.vercel.app/api/users").then((res) =>
    res.json()
  );
  console.log(dat);
  return <div>Test</div>;
};

export default Test;
