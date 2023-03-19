import { AppWrapper } from "./App.css";

import Curriculum from "./components/Curriculum/curriculum";
import Planner from "./components/Planner/Planner";
import { ModalProvider } from "./components/Modal/ModalContext";

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