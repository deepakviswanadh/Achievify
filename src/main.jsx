import React from "react";
import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Landing from "containers/Landing";
import store from "store/store";

const Main = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/*" element={<Landing />} />
      </Routes>
    </Provider>
  );
};

export default Main;
