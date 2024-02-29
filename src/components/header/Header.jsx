import "./Header.scss";

// let modeBtn = document.getElementById("light-dark");

// modeBtn.addEventListener("click", function () {
//   document.body.classList.toggle("dark");
// });

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <a href="#" className="logo">
              <img src="/images/logo.png" alt="logo" />
            </a>
            <div className="nav-items">
              <div className="nav-item">
                <button>Продукция</button>
              </div>
              <hr />
              <div className="nav-item">
                <button>Сертификаты</button>
              </div>
              <hr />
              <div className="nav-item">
                <button>Наша команда</button>
              </div>
              <hr />
              <div className="nav-item">
                <button>О нас</button>
              </div>
              <hr />
              <div className="nav-item">
                <button>Новости</button>
              </div>
              <hr />
              <div className="nav-item">
                <button>Вакансии</button>
              </div>
              <hr />
              <div className="nav-item">
                <button>Контакты</button>
              </div>
            </div>
            <button id="light-dark">Dark Mode</button>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
