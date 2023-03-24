import { AppWrapper } from "./App.css";
import { ModalProvider } from "./components/Modal/ModalContext";
import Curriculum from "./components/Curriculum/curriculum";
import Planner from "./components/Planner/Planner";

function App() {
  return (
    <ModalProvider>
      <div className={AppWrapper}>
        <Planner />
        <Curriculum />
      </div>
    </ModalProvider>
  );
}

export default App;
