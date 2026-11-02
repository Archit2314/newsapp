import { BrowserRouter, Routes, Route } from "react-router-dom";
import Newsapp from "./component/Newsapp.jsx";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Newsapp category="India" />}
        />

        {/* Technology */}
        <Route
          path="/technology"
          element={<Newsapp category="technology" />}
        />

        {/* Business */}
        <Route
          path="/business"
          element={<Newsapp category="business" />}
        />

        {/* Sports */}
        <Route
          path="/sports"
          element={<Newsapp category="sports" />}
        />

        {/* Entertainment */}
        <Route
          path="/entertainment"
          element={<Newsapp category="entertainment" />}
        />

        {/* Healthcare */}
        <Route
          path="/health"
          element={<Newsapp category="health" />}
        />

        {/* 🔍 SEARCH */}
        <Route
          path="/search/:query"
          element={<Newsapp />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;