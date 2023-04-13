import { AuthProvider } from "./Contexts/auth";
import RoutesApp from "./Routes";

function App() {
  return (
    <>
    <AuthProvider>
      <RoutesApp />
    </AuthProvider>
    </>
  );
}

export default App;
