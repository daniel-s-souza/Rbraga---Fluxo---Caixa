import { AuthProvider } from "./Contexts/auth";
import RoutesApp from "./Routes";
import './style.css';

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
