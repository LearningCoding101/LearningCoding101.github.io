import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

function AppRouter() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  if (isHomePage) {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    );
  }

  return (
    <Layout>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

function NotFound() {
  return (
    <div
      className="container section"
      style={{ textAlign: "center", padding: "4rem 1rem" }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>404</h1>
      <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
        Page not found
      </p>
      <a
        href="/"
        style={{
          display: "inline-block",
          padding: "0.75rem 1.5rem",
          backgroundColor: "var(--primary-color)",
          color: "white",
          textDecoration: "none",
          borderRadius: "var(--border-radius-md)",
          minHeight: "var(--touch-target-min)",
        }}
      >
        Go Home
      </a>
    </div>
  );
}

export default AppRouter;
