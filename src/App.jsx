import "./App.css";

import PageNotFound from "./components/PageNotFound";
import WordCounter from "./components/WordCounter";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WordCounter />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
