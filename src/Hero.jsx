function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          A Complete AI Ecosystem <br />
          for Schools
        </h1>

        <p>
          Everything your school needs to adopt AI effectively. Tools for students,
          teachers, and infrastructure — all in one place.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Get Started</button>
          <button className="secondary-btn">Schedule a Demo</button>
        </div>
      </div>

      <div className="hero-right">
       <img src="/robo.jpg" alt="AI Robot" />
      </div>
    </section>
  );
}

export default Hero;