import React, { useEffect, useState } from "react";

function MobileProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/product")
      .then((res) => res.json())
      .then((data) => {
        const mobileProducts = data.filter(
          (product) => product.category?.id === 1
        );
        setProducts(mobileProducts);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <section className="product-store position-relative padding-large no-padding-top">
      <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">Mobile Products</h2>
            <div className="btn-right">
              <a href="shop.html" className="btn btn-medium btn-normal text-uppercase">
                Go to Shop
              </a>
            </div>
          </div>
          <div className="swiper product-swiper">
            <div className="swiper-wrapper">
              {products.map((product) => (
                <div key={product.id} className="swiper-slide">
                  <div className="product-card position-relative">
                    <div className="image-holder">
                      <img src={product.imageUrl} alt={product.name} className="img-fluid" />
                    </div>
                    <div className="cart-concern position-absolute">
                      <div className="cart-button d-flex">
                        <a href="#" className="btn btn-medium btn-black">
                          Add to Cart
                          <svg className="cart-outline">
                            <use xlinkHref="#cart-outline" />
                          </svg>
                        </a>
                      </div>
                    </div>
                    <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                      <h3 className="card-title text-uppercase">
                        <a href="#">{product.name}</a>
                      </h3>
                      <span className="item-price text-primary">${product.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination position-absolute text-center" />
    </section>
  );
}

export default MobileProduct;
