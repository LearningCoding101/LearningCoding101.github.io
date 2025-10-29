import Navigation from "./Navigation";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout">
      <Navigation />
      <main className="main-content">{children}</main>
      <footer className="footer">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} Bong Capstone. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
