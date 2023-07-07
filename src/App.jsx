import AnauthenticatedApp from "./AnauthenticatedApp/AnauthenticatedApp";
import { useAuth } from "./context/authContext";

function App() {
  const { user } = useAuth();
  return <>{user ? <>Authenticated up</> : <AnauthenticatedApp />}</>;
}

export default App;
