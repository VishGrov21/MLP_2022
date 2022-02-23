import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import theme from "styles/theme";
import RootNavigator from "./routes/RootNavigator";

function App() {
  return (
     <ThemeProvider theme={theme}>
        <RootNavigator />
     </ThemeProvider>
  );
}

export default App;
