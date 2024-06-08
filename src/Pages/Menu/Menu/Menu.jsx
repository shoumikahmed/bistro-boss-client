import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Menu() {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <h1>Menu</h1>
    </div>
  );
}
