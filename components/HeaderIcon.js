import React from "react";

const HeaderIcon = ({ Icon, title }) => {
  return (
    <div>
      <Icon className="h-8" />
      <p>{title}</p>
    </div>
  );
};

export default HeaderIcon;
