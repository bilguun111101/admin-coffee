import { useUser } from "./context";
import { Layout } from "./components";
import { DashboardSection, Detail, LogIn, SignUp } from "./screen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const { user } = useUser();
  useEffect(() => {
    // console.log(location.pathname);
    const location = window.location.pathname;
    console.log(location);
  }, [])
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardSection />}>
            {user && <Route path="/:id" element={<Detail />} /> }
          </Route>
          {
            !user && (
              <>
                <Route path="/login" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
              </>
            )
          }
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
