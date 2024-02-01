import React from "react";
import ReactDOM from "react-dom/client";
import AppRoute from "./routes/AppRoute.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  //sementara biar animasi cuma jalan sekali, kalo gak banyak ngebug animasi nya.
  //<React.StrictMode>
    <AppRoute />
  //</React.StrictMode>
);
