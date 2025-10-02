import dbConnect, { collectionNamesObj } from "@/lib/dbConnect";
import React from "react";

const Test = async () => {
  const usersCollection = dbConnect("user");
  const data = await usersCollection.find({}).toArray();
  console.log(data);
  return (
    <div>
      <h1>{data.email}</h1>
    </div>
  );
};

export default Test;
