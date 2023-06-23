import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const TweetsPage = lazy(() => import("../pages/TweetsPage/TweetsPage"));

const App = () => {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="tweets" element={<TweetsPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default App;
