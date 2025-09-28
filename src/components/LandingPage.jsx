import React from 'react'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="hero-section">
        <div className="container">
          <h1 className="hero-title">SuperAgent</h1>
          <p className="hero-subtitle">
            The intelligent automation platform that transforms your workflows
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
      </header>

      <section className="features-section">
        <div className="container">
          <h2>Powerful Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>AI-Powered</h3>
              <p>Leverage cutting-edge artificial intelligence to automate complex tasks</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>Execute workflows with incredible speed and efficiency</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3>Seamless Integration</h3>
              <p>Connect with your favorite tools and platforms effortlessly</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 SuperAgent. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage