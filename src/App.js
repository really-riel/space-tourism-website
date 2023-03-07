import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Missing from "./pages/Missing";
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useStoreActions } from "easy-peasy";

function App() {
  const setDataTypeIndex = useStoreActions(
    (actions) => actions.setDataTypeIndex
  );
  const { pathname } = useLocation();

  useEffect(() => {
    setDataTypeIndex(0);
  }, [pathname, setDataTypeIndex]);

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
