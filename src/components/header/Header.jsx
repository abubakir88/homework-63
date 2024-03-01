import "./Header.scss";

const handClick = () => {
  document.body.classList.toggle("dark");
};

const navbar = () => {
  document.body.classList.toggle("open");
};
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
            <div className="nav-btns">
              <button onClick={navbar} className="menu">
                <i className="bx bx-menu-alt-right"></i>
              </button>
              <button className="mode" onClick={handClick}>
                Dark Mode
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
