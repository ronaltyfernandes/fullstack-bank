import { AppRoutes } from "./routes/App.Routes.jsx";
import "./App.css";
import BackendBootstrap from "../BackendBootstrap";

function App() {
  return (
    <BackendBootstrap>
      <AppRoutes />
    </BackendBootstrap>
  );
}

export default App;
 