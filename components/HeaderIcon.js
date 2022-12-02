import React from "react";

const HeaderIcon = ({ Icon, title }) => {
  return (
    <div className="mx-4 flex flex-col cursor-pointer hover:text-white active:text-yellow-400 lg:mx-6">
      <Icon className="h-8" />
      <p className="my-2">{title}</p>
    </div>
  );
};

export default HeaderIcon;
