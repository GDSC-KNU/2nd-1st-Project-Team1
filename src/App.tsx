import { AppWrapper } from "./App.css";
import Curriculum from "./components/curriculum";
import Planner from "./components/Planner/planner";

function App() {
  return (
    <div className={AppWrapper}>
      <Planner />
      <Curriculum />
    </div>
  );
}

export default App;
