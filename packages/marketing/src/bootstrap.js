import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};
// If we are in development and in isolation call mount inmediately on devRoot.
if (process.env.NODE_ENV === "development") {
  const devRoot = document.getElementById("_marketing-dev-root");
  if (devRoot) mount(devRoot);
}

// If we are running trough our container we should export the mount function
export { mount };
