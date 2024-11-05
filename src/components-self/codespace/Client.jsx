import { Avatar } from "@/components/ui/avatar";
import React from "react";

const Client = ({ username }) => {
  return (
    <div className="">
      <Avatar />
      <span className="">{username}</span>
    </div>
  );
};

export default Client;
