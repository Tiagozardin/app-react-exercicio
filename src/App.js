import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <main>
        <Route path="/" component={Home} exact />
      </main>
    </Router>
  );
}

export default App;
