import { CssBaseline, ThemeProvider } from "@mui/material";
import ThemeContext from "contexts/ThemeContext";
import ErrorHandler from "jsx/Common/ErrorHandler";
import DashboardLayout from "jsx/Common/Layouts/Layout";
import Loader from "jsx/Common/Loaders/Loader";
import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Routing from "routing/Routing";
import "styles/css/index.css";
import { createCustomTheme } from "styles/theming/theme";
const App = () => {
  const queryClient = new QueryClient();
  const theme = createCustomTheme();
  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <ErrorHandler>
            <Suspense fallback={<Loader />}>
              <DashboardLayout theme={theme}>
                <Routing />
              </DashboardLayout>
            </Suspense>
          </ErrorHandler>
          <Toaster />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
export default App;
