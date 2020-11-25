import React from "react";
import { useLocation } from "react-router-dom";

const NoRouteMatchPage = () => {
  const location = useLocation();
  return (
    <div>
      No such page: <strong>{location.pathname}</strong>
    </div>
  );
};

export default NoRouteMatchPage;
