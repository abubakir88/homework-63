import "./Product.scss";

function Product() {
  return (
    <>
      <section className="Product">
        <div className="container">
          <div className="Product-content">
            <div className="title">
              <h1>
                Наша <span>продукция</span>
              </h1>
              <div className="btns">
                <button>Ламинатные тубы</button>
                <button>Экструзионные тубы</button>
                <button>Другая упаковка</button>
              </div>
            </div>
            <div className="images">
              <img src="/images/k-1.png" alt="image" />
              <img src="/images/k-2.png" alt="image" />
              <img src="/images/k-3.png" alt="image" />
              <img src="/images/k-4.png" alt="image" />
              <img src="/images/k-5.png" alt="image" />
            </div>
          </div>
          <button>Перейти в каталог</button>
        </div>
      </section>
    </>
  );
}

export default Product;
