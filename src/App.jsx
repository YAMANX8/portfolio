import { Routes, Route } from "react-router-dom";
import { Landing } from "./pages/index";
const App = () => {
  return (
    <>
      <div className="font-bold text-primary bg-accent">App</div>
      <Routes>
        <Route path="/" element={Landing} />
      </Routes>
    </>
  );
};

export default App;
