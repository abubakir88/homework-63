import "./Hero.scss";

function Hero() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-texts">
              <h4>LEANGROUP - тубы и этикетки</h4>
              <h1>Ламинатные тубы</h1>
              <p>
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>
              <button>Каталог</button>
            </div>
            <div className="hero-social">
              <a href="https://vk.com/">
                <i className="bx bxl-vk"></i>
              </a>
              <a href="https://www.facebook.com/">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="https://www.linkedin.com/">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
