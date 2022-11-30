import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Helmet } from "react-helmet";

// redux store
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./reducers/store";
import { CssBaseline } from "@mui/material";

const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Helmet>
        <title>랜드마크닷컴</title>
      </Helmet>
      <CssBaseline />
      <App />
    </PersistGate>
  </Provider>
);
