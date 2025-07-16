import App from "./App";
import "./index.css";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, Routes, Route } from "react-router";
import EditTransaction from "./pages/EditTransaction";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/edittransaction" element={<EditTransaction />} />
    </Routes>
  </Router>
);
