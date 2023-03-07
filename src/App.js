import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Missing from "./pages/Missing";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="Destination">
          <Route index element={<Destination />} />
        </Route>

        <Route path="crew">
          <Route index element={<Crew />} />
        </Route>
        <Route path="technology">
          <Route index element={<Technology />} />
        </Route>
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
