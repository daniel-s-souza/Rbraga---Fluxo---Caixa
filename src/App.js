import { AuthProvider } from "./Contexts/auth";
import RoutesApp from "./Routes";
import GlobalStyle  from "./styles/global";

function App() {
  return (
    <>
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
    <GlobalStyle />
    </>
  );
}

export default App;
