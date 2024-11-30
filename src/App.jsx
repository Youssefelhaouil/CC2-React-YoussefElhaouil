import ListLivres from "./Components/ListLivres";
import LivresEmpruntes from "./Components/LivresEmprunts";
import { EmpruntProvider } from "./context/EmpruntContext";

function App() {
  return (
    <>
      <EmpruntProvider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <ListLivres />
          <LivresEmpruntes />
        </div>
      </EmpruntProvider>
    </>
  );
}

export default App;
