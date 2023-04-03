import { ThemeProvider } from "@mui/material";
import { Suspense } from "react";
import ThemeContext from "contexts/ThemeContext";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "styles/css/index.css";
import { createCustomTheme } from "styles/theming/theme";
import App from "./App";
import ErrorHandler from "jsx/Common/ErrorHandler";
const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();

const theme = createCustomTheme();

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={theme}>
        <QueryClientProvider client={queryClient}>
          <ErrorHandler>
            <Suspense fallback={"loading..."}>
              <App />
            </Suspense>
          </ErrorHandler>
          <Toaster />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);
