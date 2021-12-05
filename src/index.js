import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";
import App from "./components/app/App";

ReactDOM.render(
  <StyledEngineProvider injectFirst>
    <CssBaseline />
    <App />
  </StyledEngineProvider>,
  document.getElementById("root")
);
