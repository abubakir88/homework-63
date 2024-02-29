import "./Sertificate.scss";

function Sertificate() {
  return (
    <>
      <section className="seer">
        <div className="container">
          <h1>
            Качество продукции подтверждают <span>сертификаты</span>
          </h1>
          <div className="seer-content">
            <i className="bx bxs-chevron-left"></i>
            <img src="/images/c-1.png" alt="img" />
            <img src="/images/c-2.png" alt="img" />
            <img src="/images/c-3.png" alt="img" />
            <img src="/images/c-4.png" alt="img" />
            <img src="/images/c-5.png" alt="img" />
            <i className="bx bxs-chevron-right"></i>
          </div>
          <i className="bx bx-dots-horizontal-rounded"></i>
        </div>
      </section>
    </>
  );
}

export default Sertificate;
