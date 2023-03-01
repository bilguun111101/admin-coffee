import { Layout } from "./components";
import { DashboardSection } from "./screen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardSection />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
