import { Index } from "./Components/index";
import { BrowserRouter} from "react-router-dom";
import { Home } from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <Index />
    </BrowserRouter>
  );
}

export default App;
