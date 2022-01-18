import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ShoppingState } from "./context/shopping/ShoppingState";

ReactDOM.render(
  <BrowserRouter>
    <ShoppingState>
      <App />
    </ShoppingState>
  </BrowserRouter>,
  document.getElementById("root")
);
