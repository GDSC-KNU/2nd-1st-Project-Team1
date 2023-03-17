import { AppWrapper } from "./App.css";

import Curriculum from "./components/Curriculum/curriculum";
import Planner from "./components/Planner/Planner";
import { ModalContext } from "./components/Modal/ModalContext";

function App() {
  return (
    <ModalContext.Provider value={false}>
      <div className={AppWrapper}>
        <Planner />
        <Curriculum />
      </div>
    </ModalContext.Provider>
  );
}

export default App;