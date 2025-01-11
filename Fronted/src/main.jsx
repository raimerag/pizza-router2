import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MyContext from "./Context/MyContext";
import UserContext from "./Context/UserContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MyContext>
        <UserContext>
          <App />
        </UserContext>
      </MyContext>
    </BrowserRouter>
  </StrictMode>
);
