import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.css";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";
import { Bounce, ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop />
      <App />
      <ToastContainer
        position="bottom-left"
        autoClose={1000}
        hideProgressBar={false}
        pauseOnHover={false}
        theme="dark"
      />
    </BrowserRouter>
  </Provider>
);
