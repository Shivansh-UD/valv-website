import "./App.css";
import valvImage from "./assets/valv.png";
import heroSideImage from "./assets/image1.png";
import heroSideImage2 from "./assets/image2.png";
import heroSideImage3 from "./assets/image3.png";
import heroSideImage4 from "./assets/aditya.png"
import heroSideImage5 from "./assets/Screenshot 2025-03-02 at 12.05.52 AM.png"
import heroSideImage6 from "./assets/tito.png"
import heroSideImage7 from "./assets/shrey.png"



import presentationVideo from "./assets/Valv.mp4";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Valv</h2>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#app">App</a></li>
          <li><a href="#video">Demo</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section className="hero-app-section" id="home">

  {/* Hero Section */}
  <div className="hero">
    <div className="hero-content">
      <h1 className="hero-text">Experience the Future</h1>
      <p className="sub-text">AI-powered app to help college students with campus navigation, academic resources, and student services.</p>
      <a href="#app" className="btn">Explore More</a>
    </div>
    <div className="hero-image-container">
      <img src={heroSideImage} alt="Hero Side" className="hero-side-image" />
      <img src={heroSideImage3} alt="Hero Side" className="hero-side-image2" />
      <img src={heroSideImage2} alt="Hero Side" className="hero-side-image3" />
    </div>
  </div>

  {/* App Showcase Section */}
  <div className="app-showcase">
    <div className="app-info">
      <h2>Valv Mobile App</h2>
      <p>Revolutionizing mobile experiences with cutting-edge technology.</p>
    </div>
    <img src={valvImage} alt="Valv App" className="app-image" />
  </div>
</section>

      {/* Video Section */}
      <section className="video-section" id="video">
        <h2>Watch Our Presentation</h2>
        <video controls className="app-video">
          <source src={presentationVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Get in Touch</h2>
        <p>Have questions? Reach out to us!</p>
        <div className="hero-side-image-container">
        <div className="image-container">
  <div className="image-item">
    <img src={heroSideImage4} alt="Hero Side4" className="hero-side-image4" width="200" height="350" />
    <div>Aditya</div>
    <div>aaditya@udel.edu</div>
  </div>
  <div className="image-item">
    <img src={heroSideImage5} alt="Hero Side5" className="hero-side-image5" width="350" height="200" />
    <div>Shivansh</div>
    <div>shivansh@udel.edu</div>
  </div>
  <div className="image-item">
    <img src={heroSideImage6} alt="Hero Side6" className="hero-side-image6" width="200" height="350" />
    <div>Tito</div>
    <div>tolubaki@udel.edu</div>
  </div>
  <div className="image-item">
    <img src={heroSideImage7} alt="Hero Side7" className="hero-side-image7" width="350" height="200" />
    <div>Shreyas</div>
    <div>nair@udel.edu</div>
  </div>
</div>


        </div>        <a href="mailto:info@valv.com" className="btn">Contact Us</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 Valv Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
