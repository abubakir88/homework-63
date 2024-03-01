import "./Group.scss";

function Sertificate() {
  return (
    <>
      <section className="group">
        <div className="container">
          <h1>
            Наша <span>команда</span>
          </h1>
          <div className="group-content">
            <div className="ishchi">
              <img src="/images/ishchi-1.png" alt="ishchi" />
              <h4>Войнич Дарья</h4>
              <p>Заместитель директора по продажам</p>
              <h5>+375 (17) 270-53-77 (317)</h5>
            </div>

            <div className="ishchi">
              <img src="/images/ishchi-2.png" alt="ishchi" />
              <h3>Мисько Екатерина</h3>
              <p>Начальник отдела сопровождения</p>
              <h4>+375 (17) 270-53-77 (115)</h4>
              <h4>+375 29 112-73-48</h4>
              <h4>k.melnichenko@leangroup.by</h4>
            </div>

            <div className="ishchi">
              <img src="/images/ishchi-3.png" alt="ishchi" />
              <h3>Дмитроченко Дмитрий</h3>
              <p>Начальник отдела допечатной подготовки</p>
              <h4>+375 (17) 270-53-77 (333)</h4>
              <h4> +375 29 360-32-26</h4>
              <h4>dmitrochenko@leangroup.by</h4>
            </div>

            <div className="ishchi">
              <img src="/images/ishchi-4.png" alt="ishchi" />
              <h3>Антух Евгений</h3>
              <p>Начальник отдела снабжения</p>
              <h4>+375 (17) 270-53-77 (148)</h4>
              <h4> +375 44 764-16-28</h4>
              <h4>j.antuh@leangroup.by</h4>
            </div>

            <div className="ishchi">
              <img src="/images/ishchi-5.png" alt="ishchi" />
              <h3>Мисник Елена</h3>
              <p>Специалист по работе с клиентами</p>
              <h4>+375 (17) 270-53-77 (322)</h4>
              <h4> +375 29 329-34-03</h4>
              <h4>e.misnik@leangroup.by</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sertificate;
