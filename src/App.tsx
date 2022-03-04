import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import theme from "styles/theme";
import RootNavigator from "./routes/RootNavigator";

import { Provider } from "react-redux";
import store, {persistor} from "state/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
          <PersistGate persistor={persistor}> 
            <RootNavigator />
          </PersistGate>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
