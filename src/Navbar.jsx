function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">AI School</div>

      <ul className="nav-links">
        <li>Products</li>
        <li>About</li>
        <li>Pricing</li>
        <li>Contact</li>
      </ul>

      <div className="auth-buttons">
        <button className="login-btn">Log In</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;