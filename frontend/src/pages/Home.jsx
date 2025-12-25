import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1>🏠 Hostel Management System</h1>
          <p>
            A smart & secure hostel management platform for university students
          </p>

          <div className="hero-buttons">
            <a href="/login" className="btn primary">Login</a>
            <a href="/signup" className="btn secondary">Sign Up</a>
          </div>
        </div>
      </header>

      <section className="features">
        <h2>Why Smart Hostel?</h2>

        <div className="feature-grid">
          <div className="card">
            <h3>🛏 Room Allocation</h3>
            <p>Automatic & transparent room allotment system</p>
          </div>

          <div className="card">
            <h3>👨‍🎓 Student Dashboard</h3>
            <p>View room details, status & updates</p>
          </div>

          <div className="card">
            <h3>🛠 Admin Control</h3>
            <p>Manage rooms, students & allocations easily</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
  <p>📍 KL University Hostel, Vijayawada, Andhra Pradesh</p>
  <p>📧 hostel@kluniversity.in</p>
  <p>📞 +91 98765 43210</p>
  <p>© 2025 Smart Hostel Management System</p>
</footer>

    </div>
  );
};

export default Home;
