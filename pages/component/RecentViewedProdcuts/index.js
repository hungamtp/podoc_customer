import React from 'react';

function RecentViewedProducts() {
  return (
    <div class="container mt-100 mt-60">
      <div class="row"></div>
      <div class="col-12">
        <h5 class="mb-0">Recent Products</h5>
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
            </ul>
            <div class="shop-image position-relative overflow-hidden rounded shadow">
              <a href="shop-product-detail.html">
                <img src="asset/images/shop/product/s13.jpg" class="img-fluid" alt="" />
              </a>
              <a href="shop-product-detail.html" class="overlay-work">
                <img src="asset/images/shop/product/s-13.jpg" class="img-fluid" alt="" />
              </a>
              <ul class="list-unstyled shop-icons">
                <li>
                  <a href="javascript:void(0)" class="btn btn-icon btn-pills btn-soft-danger">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="javascript:void(0)"
                    data-bs-toggle="modal"
                    data-bs-target="#productview"
                    class="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  </a>
                </li>
                <li class="mt-2">
                  <a href="shop-cart.html" class="btn btn-icon btn-pills btn-soft-warning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cart"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body content pt-4 p-2">
              <a href="shop-product-detail.html" class="text-dark product-name h6">
                Wooden Chair
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
            <ul class="label list-unstyled mb-0">
              <li>
                <a href="javascript:void(0)" class="badge badge-link rounded-pill bg-primary">
                  New
                </a>
              </li>
            </ul>
            <div class="shop-image position-relative overflow-hidden rounded shadow">
              <a href="shop-product-detail.html">
                <img src="asset/images/shop/product/s14.jpg" class="img-fluid" alt="" />
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body content pt-4 p-2">
              <a href="shop-product-detail.html" class="text-dark product-name h6">
                Women Block Heels
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
                <a href="javascript:void(0)" class="badge badge-link rounded-pill bg-primary">
                  New
                </a>
              </li>
            </ul>
            <div class="shop-image position-relative overflow-hidden rounded shadow">
              <a href="shop-product-detail.html">
                <img src="asset/images/shop/product/s15.jpg" class="img-fluid" alt="" />
              </a>
              <a href="shop-product-detail.html" class="overlay-work">
                <img src="asset/images/shop/product/s-15.jpg" class="img-fluid" alt="" />
              </a>
              <ul class="list-unstyled shop-icons">
                <li>
                  <a href="javascript:void(0)" class="btn btn-icon btn-pills btn-soft-danger">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="javascript:void(0)"
                    data-bs-toggle="modal"
                    data-bs-target="#productview"
                    class="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  </a>
                </li>
                <li class="mt-2">
                  <a href="shop-cart.html" class="btn btn-icon btn-pills btn-soft-warning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cart"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body content pt-4 p-2">
              <a href="shop-product-detail.html" class="text-dark product-name h6">
                T-Shirts
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
                <img src="asset/images/shop/product/s16.jpg" class="img-fluid" alt="" />
              </a>
              <a href="shop-product-detail.html" class="overlay-work">
                <img src="asset/images/shop/product/s-16.jpg" class="img-fluid" alt="" />
              </a>
              <ul class="list-unstyled shop-icons">
                <li>
                  <a href="javascript:void(0)" class="btn btn-icon btn-pills btn-soft-danger">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  </a>
                </li>
                <li class="mt-2">
                  <a
                    href="javascript:void(0)"
                    data-bs-toggle="modal"
                    data-bs-target="#productview"
                    class="btn btn-icon btn-pills btn-soft-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  </a>
                </li>
                <li class="mt-2">
                  <a href="shop-cart.html" class="btn btn-icon btn-pills btn-soft-warning">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-cart"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div class="card-body content pt-4 p-2">
              <a href="shop-product-detail.html" class="text-dark product-name h6">
                Clock
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
      </div>
    </div>
  );
}

export default RecentViewedProducts;
