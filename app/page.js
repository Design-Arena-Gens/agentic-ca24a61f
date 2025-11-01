'use client'

export default function Home() {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="container">
          <div className="nav">
            <div className="logo">
              <span className="logo-icon">🛡️</span>
              <span className="logo-text">ExamGuard</span>
            </div>
            <nav className="nav-links">
              <a href="#features">Features</a>
              <a href="#solutions">Solutions</a>
              <a href="#pricing">Pricing</a>
              <a href="#contact" className="btn-primary">Get Started</a>
            </nav>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="badge">Trusted by 500+ Institutions</div>
            <h1 className="hero-title">
              Secure Online Testing <br />
              <span className="gradient-text">Without Compromise</span>
            </h1>
            <p className="hero-subtitle">
              AI-powered anti-cheating technology, granular customization, and real-world solutions
              for universities, colleges, and enterprises. Built for academic integrity.
            </p>
            <div className="hero-cta">
              <button className="btn-large btn-primary">Start Free Trial</button>
              <button className="btn-large btn-secondary">Watch Demo</button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">10M+</div>
                <div className="stat-label">Tests Conducted</div>
              </div>
              <div className="stat">
                <div className="stat-number">99.7%</div>
                <div className="stat-label">Uptime SLA</div>
              </div>
              <div className="stat">
                <div className="stat-number">85%</div>
                <div className="stat-label">Cheating Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Enterprise-Grade Features</h2>
            <p className="section-subtitle">Everything you need to deliver secure, fair assessments at scale</p>
          </div>

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Advanced Anti-Cheating</h3>
              <p>AI-powered proctoring with facial recognition, tab switching detection, browser lockdown, and real-time monitoring to ensure academic integrity.</p>
              <ul className="feature-list">
                <li>Live webcam monitoring</li>
                <li>Screen recording & analysis</li>
                <li>Keystroke pattern detection</li>
                <li>Multi-person detection</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚙️</div>
              <h3>Micro-Level Customization</h3>
              <p>Configure every aspect of each test individually. From time limits to question randomization, create the perfect assessment environment.</p>
              <ul className="feature-list">
                <li>Per-student accommodations</li>
                <li>Dynamic question pools</li>
                <li>Custom scoring rubrics</li>
                <li>Adaptive difficulty</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎓</div>
              <h3>University-Ready</h3>
              <p>Built for real-world academic environments with LMS integration, accessibility compliance, and support for 100,000+ concurrent users.</p>
              <ul className="feature-list">
                <li>Canvas, Blackboard, Moodle integration</li>
                <li>WCAG 2.1 AAA compliant</li>
                <li>SSO & SAML authentication</li>
                <li>Multi-language support</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Edge Case Solutions</h3>
              <p>Handles network interruptions, power failures, and technical issues gracefully with auto-save, session recovery, and offline mode.</p>
              <ul className="feature-list">
                <li>Auto-save every 5 seconds</li>
                <li>Seamless reconnection</li>
                <li>Partial credit preservation</li>
                <li>Emergency protocols</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Advanced Analytics</h3>
              <p>Deep insights into test performance, cheating patterns, and learning outcomes with exportable reports and data visualizations.</p>
              <ul className="feature-list">
                <li>Real-time dashboards</li>
                <li>Predictive analytics</li>
                <li>Anomaly detection</li>
                <li>Custom report builder</li>
              </ul>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>Security & Compliance</h3>
              <p>SOC 2 Type II certified, GDPR compliant, with end-to-end encryption and comprehensive audit trails for complete peace of mind.</p>
              <ul className="feature-list">
                <li>256-bit AES encryption</li>
                <li>FERPA compliant</li>
                <li>Regular security audits</li>
                <li>Role-based access control</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="solutions" id="solutions">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Built for Every Institution</h2>
            <p className="section-subtitle">Tailored solutions for diverse educational needs</p>
          </div>

          <div className="solution-cards">
            <div className="solution-card">
              <div className="solution-header">
                <h3>Universities & Colleges</h3>
                <div className="solution-badge">Most Popular</div>
              </div>
              <p>Scale from 100 to 100,000 students with enterprise features, comprehensive proctoring, and seamless LMS integration.</p>
              <div className="solution-features">
                <span>✓ Unlimited tests & students</span>
                <span>✓ Advanced proctoring suite</span>
                <span>✓ LMS integration</span>
                <span>✓ Dedicated support</span>
              </div>
            </div>

            <div className="solution-card">
              <div className="solution-header">
                <h3>Professional Certification</h3>
              </div>
              <p>High-stakes testing with maximum security, identity verification, and compliance with industry standards.</p>
              <div className="solution-features">
                <span>✓ Government-grade ID verification</span>
                <span>✓ Biometric authentication</span>
                <span>✓ Secure test delivery</span>
                <span>✓ Detailed audit logs</span>
              </div>
            </div>

            <div className="solution-card">
              <div className="solution-header">
                <h3>Corporate Training</h3>
              </div>
              <p>Employee assessment and certification with custom branding, API access, and advanced reporting capabilities.</p>
              <div className="solution-features">
                <span>✓ White-label options</span>
                <span>✓ REST API access</span>
                <span>✓ Skills gap analysis</span>
                <span>✓ Learning pathways</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="use-cases">
        <div className="container">
          <h2 className="section-title">Real-World Edge Cases We Handle</h2>

          <div className="use-case-grid">
            <div className="use-case">
              <div className="use-case-icon">🌐</div>
              <h4>Poor Network Connectivity</h4>
              <p>Automatic data synchronization and offline mode ensure no work is lost, even with unstable connections.</p>
            </div>

            <div className="use-case">
              <div className="use-case-icon">⚡</div>
              <h4>Power Outages</h4>
              <p>Session recovery allows students to continue exactly where they left off after unexpected interruptions.</p>
            </div>

            <div className="use-case">
              <div className="use-case-icon">♿</div>
              <h4>Accessibility Needs</h4>
              <p>Screen reader support, keyboard navigation, adjustable timers, and text-to-speech for diverse learners.</p>
            </div>

            <div className="use-case">
              <div className="use-case-icon">🌍</div>
              <h4>Multiple Time Zones</h4>
              <p>Smart scheduling, automatic timezone detection, and flexible test windows for global student populations.</p>
            </div>

            <div className="use-case">
              <div className="use-case-icon">📱</div>
              <h4>Device Diversity</h4>
              <p>Works seamlessly on Windows, Mac, Linux, Chromebook, tablets, and mobile devices with adaptive interfaces.</p>
            </div>

            <div className="use-case">
              <div className="use-case-icon">🔄</div>
              <h4>Browser Crashes</h4>
              <p>Continuous auto-save and instant recovery mean technical issues never result in lost progress or work.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing" id="pricing">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Transparent Pricing</h2>
            <p className="section-subtitle">No hidden fees. Cancel anytime.</p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Starter</h3>
              <div className="price">
                <span className="price-amount">$99</span>
                <span className="price-period">/month</span>
              </div>
              <p className="price-description">Perfect for small institutions</p>
              <ul className="pricing-features">
                <li>✓ Up to 500 students</li>
                <li>✓ Basic proctoring</li>
                <li>✓ Standard support</li>
                <li>✓ 10 GB storage</li>
                <li>✓ Email support</li>
              </ul>
              <button className="btn-pricing">Start Free Trial</button>
            </div>

            <div className="pricing-card pricing-featured">
              <div className="featured-badge">Most Popular</div>
              <h3>Professional</h3>
              <div className="price">
                <span className="price-amount">$299</span>
                <span className="price-period">/month</span>
              </div>
              <p className="price-description">For growing universities</p>
              <ul className="pricing-features">
                <li>✓ Up to 5,000 students</li>
                <li>✓ Advanced proctoring</li>
                <li>✓ Priority support</li>
                <li>✓ 100 GB storage</li>
                <li>✓ LMS integration</li>
                <li>✓ Custom branding</li>
              </ul>
              <button className="btn-pricing btn-primary">Start Free Trial</button>
            </div>

            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">
                <span className="price-amount">Custom</span>
              </div>
              <p className="price-description">For large institutions</p>
              <ul className="pricing-features">
                <li>✓ Unlimited students</li>
                <li>✓ Full proctoring suite</li>
                <li>✓ 24/7 dedicated support</li>
                <li>✓ Unlimited storage</li>
                <li>✓ API access</li>
                <li>✓ Custom development</li>
                <li>✓ SLA guarantee</li>
              </ul>
              <button className="btn-pricing">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Trusted by Leading Institutions</h2>

          <div className="testimonial-grid">
            <div className="testimonial">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"ExamGuard reduced cheating incidents by 85% in our first semester. The platform is intuitive and the anti-cheating features are unmatched."</p>
              <div className="testimonial-author">
                <strong>Dr. Sarah Mitchell</strong>
                <span>Dean of Online Learning, State University</span>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"The micro-level customization is a game-changer. We can finally provide proper accommodations while maintaining test security."</p>
              <div className="testimonial-author">
                <strong>Prof. James Chen</strong>
                <span>Computer Science Dept, Tech Institute</span>
              </div>
            </div>

            <div className="testimonial">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"During our campus-wide finals, 15,000 students tested simultaneously without a single issue. Exceptional reliability."</p>
              <div className="testimonial-author">
                <strong>Maria Rodriguez</strong>
                <span>IT Director, Metropolitan College</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Transform Your Testing?</h2>
            <p className="cta-subtitle">Join 500+ institutions delivering secure, fair assessments</p>
            <div className="cta-buttons">
              <button className="btn-large btn-primary">Start Free 30-Day Trial</button>
              <button className="btn-large btn-secondary">Schedule Demo</button>
            </div>
            <p className="cta-note">No credit card required • Full feature access • 24/7 support</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-logo">
                <span className="logo-icon">🛡️</span>
                <span className="logo-text">ExamGuard</span>
              </div>
              <p>Secure online testing solutions for the modern educational institution.</p>
            </div>

            <div className="footer-col">
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#solutions">Solutions</a></li>
                <li><a href="#">Security</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">API Reference</a></li>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">System Status</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 ExamGuard. All rights reserved.</p>
            <div className="footer-badges">
              <span className="badge">SOC 2 Certified</span>
              <span className="badge">GDPR Compliant</span>
              <span className="badge">WCAG AAA</span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .landing-page {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .header {
          background: #fff;
          border-bottom: 1px solid #e5e7eb;
          position: sticky;
          top: 0;
          z-index: 100;
          backdrop-filter: blur(10px);
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .logo-icon {
          font-size: 32px;
        }

        .nav-links {
          display: flex;
          gap: 32px;
          align-items: center;
        }

        .nav-links a {
          text-decoration: none;
          color: #4b5563;
          font-weight: 500;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: #1a1a1a;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
        }

        .btn-secondary {
          background: #f3f4f6;
          color: #1a1a1a;
          padding: 12px 24px;
          border-radius: 8px;
          border: 2px solid #e5e7eb;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-secondary:hover {
          border-color: #667eea;
          background: #fff;
        }

        .hero {
          padding: 120px 0 80px;
          background: linear-gradient(180deg, #f9fafb 0%, #ffffff 100%);
        }

        .hero-content {
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .badge {
          display: inline-block;
          background: #e0e7ff;
          color: #4338ca;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .hero-title {
          font-size: 64px;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 24px;
          color: #1a1a1a;
        }

        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 20px;
          color: #6b7280;
          margin-bottom: 40px;
          line-height: 1.8;
        }

        .hero-cta {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-bottom: 60px;
        }

        .btn-large {
          padding: 16px 32px;
          font-size: 16px;
        }

        .hero-stats {
          display: flex;
          justify-content: center;
          gap: 80px;
          margin-top: 60px;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          font-size: 42px;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 14px;
          color: #6b7280;
          font-weight: 500;
        }

        .features {
          padding: 100px 0;
          background: #ffffff;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 16px;
          color: #1a1a1a;
        }

        .section-subtitle {
          font-size: 20px;
          color: #6b7280;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 32px;
        }

        .feature-card {
          background: #f9fafb;
          padding: 40px;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          transition: all 0.3s;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
          border-color: #667eea;
        }

        .feature-icon {
          font-size: 48px;
          margin-bottom: 24px;
        }

        .feature-card h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
          color: #1a1a1a;
        }

        .feature-card p {
          color: #4b5563;
          margin-bottom: 20px;
          line-height: 1.7;
        }

        .feature-list {
          list-style: none;
        }

        .feature-list li {
          color: #6b7280;
          padding: 8px 0;
          padding-left: 24px;
          position: relative;
        }

        .feature-list li:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #667eea;
          font-weight: 700;
        }

        .solutions {
          padding: 100px 0;
          background: linear-gradient(180deg, #ffffff 0%, #f9fafb 100%);
        }

        .solution-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
        }

        .solution-card {
          background: white;
          padding: 40px;
          border-radius: 16px;
          border: 2px solid #e5e7eb;
          transition: all 0.3s;
        }

        .solution-card:hover {
          border-color: #667eea;
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.15);
        }

        .solution-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }

        .solution-header h3 {
          font-size: 24px;
          font-weight: 700;
          color: #1a1a1a;
        }

        .solution-badge {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
        }

        .solution-card p {
          color: #6b7280;
          margin-bottom: 24px;
          line-height: 1.7;
        }

        .solution-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .solution-features span {
          color: #4b5563;
          font-size: 14px;
          font-weight: 500;
        }

        .use-cases {
          padding: 100px 0;
          background: #fff;
        }

        .use-case-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 32px;
          margin-top: 60px;
        }

        .use-case {
          text-align: center;
          padding: 32px;
        }

        .use-case-icon {
          font-size: 48px;
          margin-bottom: 16px;
        }

        .use-case h4 {
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 12px;
          color: #1a1a1a;
        }

        .use-case p {
          color: #6b7280;
          line-height: 1.7;
        }

        .pricing {
          padding: 100px 0;
          background: #f9fafb;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          max-width: 1100px;
          margin: 0 auto;
        }

        .pricing-card {
          background: white;
          padding: 48px;
          border-radius: 16px;
          border: 2px solid #e5e7eb;
          position: relative;
        }

        .pricing-featured {
          border-color: #667eea;
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
          transform: scale(1.05);
        }

        .featured-badge {
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 8px 20px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
        }

        .pricing-card h3 {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
          color: #1a1a1a;
        }

        .price {
          margin-bottom: 8px;
        }

        .price-amount {
          font-size: 56px;
          font-weight: 800;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .price-period {
          color: #6b7280;
          font-size: 18px;
        }

        .price-description {
          color: #6b7280;
          margin-bottom: 32px;
        }

        .pricing-features {
          list-style: none;
          margin-bottom: 32px;
        }

        .pricing-features li {
          padding: 12px 0;
          color: #4b5563;
          border-bottom: 1px solid #f3f4f6;
        }

        .btn-pricing {
          width: 100%;
          padding: 16px;
          border-radius: 8px;
          border: 2px solid #e5e7eb;
          background: white;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-pricing:hover {
          border-color: #667eea;
          background: #f9fafb;
        }

        .btn-pricing.btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          color: white;
        }

        .testimonials {
          padding: 100px 0;
          background: white;
        }

        .testimonial-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 32px;
          margin-top: 60px;
        }

        .testimonial {
          background: #f9fafb;
          padding: 40px;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
        }

        .testimonial-stars {
          font-size: 20px;
          margin-bottom: 16px;
        }

        .testimonial-text {
          color: #4b5563;
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 24px;
          font-style: italic;
        }

        .testimonial-author strong {
          display: block;
          color: #1a1a1a;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .testimonial-author span {
          color: #6b7280;
          font-size: 14px;
        }

        .cta-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .cta-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-title {
          font-size: 48px;
          font-weight: 800;
          margin-bottom: 16px;
        }

        .cta-subtitle {
          font-size: 20px;
          margin-bottom: 40px;
          opacity: 0.95;
        }

        .cta-buttons {
          display: flex;
          gap: 16px;
          justify-content: center;
          margin-bottom: 24px;
        }

        .cta-buttons .btn-primary {
          background: white;
          color: #667eea;
        }

        .cta-buttons .btn-secondary {
          background: transparent;
          border-color: white;
          color: white;
        }

        .cta-buttons .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .cta-note {
          opacity: 0.9;
          font-size: 14px;
        }

        .footer {
          background: #1a1a1a;
          color: white;
          padding: 80px 0 40px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }

        .footer-col h4 {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .footer-col ul {
          list-style: none;
        }

        .footer-col li {
          margin-bottom: 12px;
        }

        .footer-col a {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-col a:hover {
          color: white;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .footer-col p {
          color: #9ca3af;
          line-height: 1.7;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 40px;
          border-top: 1px solid #374151;
        }

        .footer-bottom p {
          color: #9ca3af;
        }

        .footer-badges {
          display: flex;
          gap: 12px;
        }

        .footer-badges .badge {
          background: #374151;
          color: #d1d5db;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 42px;
          }

          .section-title {
            font-size: 36px;
          }

          .hero-stats {
            flex-direction: column;
            gap: 32px;
          }

          .nav-links {
            display: none;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .pricing-featured {
            transform: scale(1);
          }

          .cta-buttons {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  )
}
