import { PageTransition } from "./styles/Styles";
import AppRoutes from "./AppRoutes";

function App() {
  return (
    <PageTransition>
      <AppRoutes />
    </PageTransition>
  );
}

export default App;
