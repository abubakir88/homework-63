import "./Info.scss";

function Info() {
  return (
    <>
      <section className="info">
        <div className="container">
          <div className="info-content">
            <div className="texts">
              <h1>
                Получить подробную <span>информацию</span>
              </h1>
              <p>
                Просто заполните форму, наш менеджер свяжется с вами в ближайшее
                время
              </p>
            </div>
            <div className="inputs">
              <div className="input-1">
                <label htmlFor="name">
                  <i className="bx bxs-user"></i>
                </label>
                <hr />
                <input type="text" placeholder="имя" id="name" name="name" />
              </div>

              <div className="input-1">
                <label htmlFor="number">
                  <i className="bx bxs-phone"></i>
                </label>
                <hr />
                <input
                  type="number"
                  placeholder="им+375 (29) 0000000я"
                  id="number"
                  name="number"
                />
              </div>
            </div>

            <textarea
              name="text"
              id=""
              cols="55"
              rows="4"
              placeholder="Комментарий"
            ></textarea>
            <button>Получить информацию</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Info;
