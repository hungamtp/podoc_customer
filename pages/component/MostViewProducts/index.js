import React from 'react';

function MostViewProducts() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h5 class="mb-0">Most Viewed Products</h5>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
          <div class="card shop-list border-0 position-relative">
            <ul class="label list-unstyled mb-0">
              <li>
                <a href="javascript:void(0)" class="badge badge-link rounded-pill bg-primary">
                  New
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="badge badge-link rounded-pill bg-success">
                  Featured
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" class="badge badge-link rounded-pill bg-warning">
                  Sale
                </a>
              </li>
            </ul>
            <div class="shop-image position-relative overflow-hidden rounded shadow">
              <a href="shop-product-detail.html">
                <img src="asset/images/shop/product/s1.jpg" class="img-fluid" alt="" />
              </a>
              <a href="shop-product-detail.html" class="overlay-work">
                <img src="asset/images/shop/product/s-1.jpg" class="img-fluid" alt="" />
              </a>
              <ul class="list-unstyled shop-icons">
                <li>
                  <a href="javascript:void(0)" class="btn btn-icon btn-pills btn-soft-danger">
                    <i data-feather="heart" class="icons"></i>
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="javascript:void(0)"
                    data-bs-toggle="modal"
                    data-bs-target="#productview"
                    class="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <i data-feather="eye" class="icons"></i>
                  </a>
                </li>
                <li class="mt-2">
                  <a href="shop-cart.html" class="btn btn-icon btn-pills btn-soft-warning">
                    <i data-feather="shopping-cart" class="icons"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body content pt-4 p-2">
              <a href="shop-product-detail.html" class="text-dark product-name h6">
                Branded T-Shirt
              </a>
              <div class="d-flex justify-content-between mt-1">
                <h6 class="text-dark small fst-italic mb-0 mt-1">
                  $16.00 <del class="text-danger ms-2">$21.00</del>
                </h6>
                <ul class="list-unstyled text-warning mb-0">
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
          <div class="card shop-list border-0 position-relative">
            <div class="shop-image position-relative overflow-hidden rounded shadow">
              <a href="shop-product-detail.html">
                <img src="asset/images/shop/product/s2.jpg" class="img-fluid" alt="" />
              </a>
              <a href="shop-product-detail.html" class="overlay-work">
                <img src="asset/images/shop/product/s-2.jpg" class="img-fluid" alt="" />
              </a>
              <ul class="list-unstyled shop-icons">
                <li>
                  <a href="javascript:void(0)" class="btn btn-icon btn-pills btn-soft-danger">
                    <i data-feather="heart" class="icons"></i>
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="javascript:void(0)"
                    data-bs-toggle="modal"
                    data-bs-target="#productview"
                    class="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <i data-feather="eye" class="icons"></i>
                  </a>
                </li>
                <li class="mt-2">
                  <a href="shop-cart.html" class="btn btn-icon btn-pills btn-soft-warning">
                    <i data-feather="shopping-cart" class="icons"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body content pt-4 p-2">
              <a href="shop-product-detail.html" class="text-dark product-name h6">
                Shopping Bag
              </a>
              <div class="d-flex justify-content-between mt-1">
                <h6 class="text-dark small fst-italic mb-0 mt-1">
                  $21.00 <del class="text-danger ms-2">$25.00</del>
                </h6>
                <ul class="list-unstyled text-warning mb-0">
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
          <div class="card shop-list border-0 position-relative">
            <ul class="label list-unstyled mb-0">
              <li>
                <a href="javascript:void(0)" class="badge badge-link rounded-pill bg-warning">
                  Sale
                </a>
              </li>
            </ul>
            <div class="shop-image position-relative overflow-hidden rounded shadow">
              <a href="shop-product-detail.html">
                <img src="asset/images/shop/product/s3.jpg" class="img-fluid" alt="" />
              </a>
              <a href="shop-product-detail.html" class="overlay-work">
                <img src="asset/images/shop/product/s-3.jpg" class="img-fluid" alt="" />
              </a>
              <ul class="list-unstyled shop-icons">
                <li>
                  <a href="javascript:void(0)" class="btn btn-icon btn-pills btn-soft-danger">
                    <i data-feather="heart" class="icons"></i>
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="javascript:void(0)"
                    data-bs-toggle="modal"
                    data-bs-target="#productview"
                    class="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <i data-feather="eye" class="icons"></i>
                  </a>
                </li>
                <li class="mt-2">
                  <a href="shop-cart.html" class="btn btn-icon btn-pills btn-soft-warning">
                    <i data-feather="shopping-cart" class="icons"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body content pt-4 p-2">
              <a href="shop-product-detail.html" class="text-dark product-name h6">
                Elegent Watch
              </a>
              <div class="d-flex justify-content-between mt-1">
                <h6 class="text-dark small fst-italic mb-0 mt-1">
                  $5.00 <span class="text-success ms-1">30% off</span>
                </h6>
                <ul class="list-unstyled text-warning mb-0">
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
          <div class="card shop-list border-0 position-relative">
            <div class="shop-image position-relative overflow-hidden rounded shadow">
              <a href="shop-product-detail.html">
                <img src="asset/images/shop/product/s4.jpg" class="img-fluid" alt="" />
              </a>
              <a href="shop-product-detail.html" class="overlay-work">
                <img src="asset/images/shop/product/s-4.jpg" class="img-fluid" alt="" />
              </a>
              <ul class="list-unstyled shop-icons">
                <li>
                  <a href="javascript:void(0)" class="btn btn-icon btn-pills btn-soft-danger">
                    <i data-feather="heart" class="icons"></i>
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="javascript:void(0)"
                    data-bs-toggle="modal"
                    data-bs-target="#productview"
                    class="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <i data-feather="eye" class="icons"></i>
                  </a>
                </li>
                <li class="mt-2">
                  <a href="shop-cart.html" class="btn btn-icon btn-pills btn-soft-warning">
                    <i data-feather="shopping-cart" class="icons"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body content pt-4 p-2">
              <a href="shop-product-detail.html" class="text-dark product-name h6">
                Casual Shoes
              </a>
              <div class="d-flex justify-content-between mt-1">
                <h6 class="text-dark small fst-italic mb-0 mt-1">
                  $18.00 <del class="text-danger ms-2">$22.00</del>
                </h6>
                <ul class="list-unstyled text-warning mb-0">
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
          <div class="card shop-list border-0 position-relative">
            <ul class="label list-unstyled mb-0">
              <li>
                <a href="javascript:void(0)" class="badge badge-link rounded-pill bg-warning">
                  Sale
                </a>
              </li>
            </ul>
            <div class="shop-image position-relative overflow-hidden rounded shadow">
              <a href="shop-product-detail.html">
                <img src="asset/images/shop/product/s5.jpg" class="img-fluid" alt="" />
              </a>
              <a href="shop-product-detail.html" class="overlay-work">
                <img src="asset/images/shop/product/s-5.jpg" class="img-fluid" alt="" />
              </a>
              <ul class="list-unstyled shop-icons">
                <li>
                  <a href="javascript:void(0)" class="btn btn-icon btn-pills btn-soft-danger">
                    <i data-feather="heart" class="icons"></i>
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="javascript:void(0)"
                    data-bs-toggle="modal"
                    data-bs-target="#productview"
                    class="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <i data-feather="eye" class="icons"></i>
                  </a>
                </li>
                <li class="mt-2">
                  <a href="shop-cart.html" class="btn btn-icon btn-pills btn-soft-warning">
                    <i data-feather="shopping-cart" class="icons"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body content pt-4 p-2">
              <a href="shop-product-detail.html" class="text-dark product-name h6">
                Earphones
              </a>
              <div class="d-flex justify-content-between mt-1">
                <h6 class="text-dark small fst-italic mb-0 mt-1">$3.00</h6>
                <ul class="list-unstyled text-warning mb-0">
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
          <div class="card shop-list border-0 position-relative">
            <div class="shop-image position-relative overflow-hidden rounded shadow">
              <a href="shop-product-detail.html">
                <img src="asset/images/shop/product/s6.jpg" class="img-fluid" alt="" />
              </a>
              <div class="overlay-work">
                <div class="py-2 bg-soft-dark rounded-bottom out-stock">
                  <h6 class="mb-0 text-center">Out of stock</h6>
                </div>
              </div>
              <ul class="list-unstyled shop-icons">
                <li>
                  <a
                    href="javascript:void(0)"
                    data-bs-toggle="modal"
                    data-bs-target="#productview"
                    class="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <i data-feather="eye" class="icons"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body content pt-4 p-2">
              <a href="shop-product-detail.html" class="text-dark product-name h6">
                Elegent Mug
              </a>
              <div class="d-flex justify-content-between mt-1">
                <h6 class="text-dark small fst-italic mb-0 mt-1">
                  $4.50 <del class="text-danger ms-2">$6.50</del>
                </h6>
                <ul class="list-unstyled text-warning mb-0">
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
          <div class="card shop-list border-0 position-relative">
            <div class="shop-image position-relative overflow-hidden rounded shadow">
              <a href="shop-product-detail.html">
                <img src="asset/images/shop/product/s7.jpg" class="img-fluid" alt="" />
              </a>
              <a href="shop-product-detail.html" class="overlay-work">
                <img src="asset/images/shop/product/s-7.jpg" class="img-fluid" alt="" />
              </a>
              <ul class="list-unstyled shop-icons">
                <li>
                  <a href="javascript:void(0)" class="btn btn-icon btn-pills btn-soft-danger">
                    <i data-feather="heart" class="icons"></i>
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="javascript:void(0)"
                    data-bs-toggle="modal"
                    data-bs-target="#productview"
                    class="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <i data-feather="eye" class="icons"></i>
                  </a>
                </li>
                <li class="mt-2">
                  <a href="shop-cart.html" class="btn btn-icon btn-pills btn-soft-warning">
                    <i data-feather="shopping-cart" class="icons"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body content pt-4 p-2">
              <a href="shop-product-detail.html" class="text-dark product-name h6">
                Sony Headphones
              </a>
              <div class="d-flex justify-content-between mt-1">
                <h6 class="text-dark small fst-italic mb-0 mt-1">
                  $9.99 <span class="text-success ms-2">20% off</span>
                </h6>
                <ul class="list-unstyled text-warning mb-0">
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
          <div class="card shop-list border-0 position-relative">
            <ul class="label list-unstyled mb-0">
              <li>
                <a href="javascript:void(0)" class="badge badge-link rounded-pill bg-success">
                  Featured
                </a>
              </li>
            </ul>
            <div class="shop-image position-relative overflow-hidden rounded shadow">
              <a href="shop-product-detail.html">
                <img src="asset/images/shop/product/s8.jpg" class="img-fluid" alt="" />
              </a>
              <a href="shop-product-detail.html" class="overlay-work">
                <img src="asset/images/shop/product/s-8.jpg" class="img-fluid" alt="" />
              </a>
              <ul class="list-unstyled shop-icons">
                <li>
                  <a href="javascript:void(0)" class="btn btn-icon btn-pills btn-soft-danger">
                    <i data-feather="heart" class="icons"></i>
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="javascript:void(0)"
                    data-bs-toggle="modal"
                    data-bs-target="#productview"
                    class="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <i data-feather="eye" class="icons"></i>
                  </a>
                </li>
                <li class="mt-2">
                  <a href="shop-cart.html" class="btn btn-icon btn-pills btn-soft-warning">
                    <i data-feather="shopping-cart" class="icons"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body content pt-4 p-2">
              <a href="shop-product-detail.html" class="text-dark product-name h6">
                Wooden Stools
              </a>
              <div class="d-flex justify-content-between mt-1">
                <h6 class="text-dark small fst-italic mb-0 mt-1">
                  $22.00 <del class="text-danger ms-2">$25.00</del>
                </h6>
                <ul class="list-unstyled text-warning mb-0">
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                  <li class="list-inline-item">
                    <i class="mdi mdi-star"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MostViewProducts;
