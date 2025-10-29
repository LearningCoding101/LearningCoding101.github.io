import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="container">
        <section className="section about-header">
          <h1 className="page-title">About Bong Capstone</h1>
          <p className="page-subtitle">
            A modern, mobile-first web application built with cutting-edge
            technologies
          </p>
        </section>

        <section className="section about-content">
          <div className="content-card">
            <h2>Our Mission</h2>
            <p>
              We aim to deliver exceptional mobile experiences by leveraging the
              latest web technologies and best practices. Our focus is on
              creating fast, responsive, and intuitive applications that work
              seamlessly across all devices.
            </p>
          </div>

          <div className="content-card">
            <h2>Technology Stack</h2>
            <ul className="tech-list">
              <li>
                <strong>React 18</strong> - Modern UI library with concurrent
                features
              </li>
              <li>
                <strong>Vite</strong> - Next-generation frontend tooling
              </li>
              <li>
                <strong>React Router</strong> - Declarative routing for React
              </li>
              <li>
                <strong>PWA</strong> - Progressive Web App capabilities
              </li>
              <li>
                <strong>CSS Variables</strong> - Dynamic theming support
              </li>
            </ul>
          </div>

          <div className="content-card">
            <h2>Mobile-First Approach</h2>
            <p>
              This application is designed with mobile users in mind. Every
              component and interaction has been optimized for touch interfaces,
              with minimum touch target sizes of 44x44 pixels, smooth
              transitions, and responsive layouts that adapt to any screen size.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
