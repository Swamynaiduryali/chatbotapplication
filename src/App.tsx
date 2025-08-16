import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Index } from "./Components/index";
import { Home } from "./Components/Home";
import { List } from "./Components/List";
import { Global } from "./Components/Global";
import { Grid } from "./Components/Grid";
import { Lines } from "./Components/Lines";
import { Settings } from "./Components/Settings";
import { Steps } from "./Components/Steps";
import { SwamyGitLearning } from "./Components/SwamyGitLearning";
import { MarmsGitLearning } from "./Components/MarmsGitLearning";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with Sidebar */}
        <Route path="/" element={<Index />}>
          <Route path="home" element={<Home />} />
          <Route path="list" element={<List />} />
          <Route path="global" element={<Global />} />
          <Route path="grid" element={<Grid />} />
          <Route path="lines" element={<Lines />} />
          <Route path="settings" element={<Settings />} />
          <Route path="blank" element={<Steps />} />
          <Route path="swamy-git-learning" element={<SwamyGitLearning />} />
          <Route path="marms" element={<MarmsGitLearning />} />
        </Route>

        {/* Example of a route without the sidebar */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
