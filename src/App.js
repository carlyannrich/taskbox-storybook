import React from "react";
import { Provider } from "react-redux";
import store from "./lib/redux";

import InboxScreen from "./components/InboxScreen";

import "./index.css";
function App() {
  return (
    <Provider store={store}>
      <InboxScreen />
    </Provider>
  );
}
export default App;

// change the App component to render the InboxScreen -eventually we would use a router to choose the correct screen.
