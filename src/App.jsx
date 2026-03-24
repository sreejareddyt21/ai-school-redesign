import Navbar from "./Navbar";
import Hero from "./Hero";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* ✅ ADD PRODUCT SECTION HERE */}
      <div style={{ padding: "60px", textAlign: "center" }}>
        <h2>Our AI Products</h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px"
        }}>

          <div style={{
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            width: "200px"
          }}>
            <h3>Cypher</h3>
            <p>AI learning companion for students</p>
          </div>

          <div style={{
            padding: "20px",
            background: "white",
            borderRadius: "10px",
            width: "200px"
          }}>
            <h3>Morpheus</h3>
            <p>AI assistant for teachers</p>
          </div>

          <div style={{
            padding: "10px",
            background: "white",
            borderRadius: "10px",
            width: "200px"
          }}>
            <h3>Zion</h3>
            <p>AI productivity tools</p>
          </div>

        </div>
      </div>

    </>
  );
}

export default App;