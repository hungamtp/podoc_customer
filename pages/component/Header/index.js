import React from 'react';

const Header = () => {
  function toggleMenu() {
    document.getElementById('isToggle').classList.toggle('open');
    var isOpen = document.getElementById('navigation');
    if (isOpen.style.display === 'block') {
      isOpen.style.display = 'none';
    } else {
      isOpen.style.display = 'block';
    }
  }
  return (
    <div>
      <div id="topnav" class="defaultscroll sticky">
        <div class="container">
          <a class="logo" href="index.html">
            <img src="images/logo-dark.png" height="24" class="logo-light-mode" alt="" />
            <img src="images/logo-light.png" height="24" class="logo-dark-mode" alt="" />
          </a>

          <div class="menu-extras">
            <div class="menu-item">
              <a class="navbar-toggle" id="isToggle" onClick={toggleMenu}>
                <div class="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </a>
            </div>
          </div>

          <ul class="buy-button list-inline mb-0">
            <li class="list-inline-item mb-0 pe-1">
              <a href="javascript:void(0)" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
                <i class="uil uil-search h5 text-dark align-middle"></i>
              </a>
            </li>
            <li class="list-inline-item mb-0">
              <div class="dropdown">
                <button
                  type="button"
                  class="btn btn-icon btn-pills btn-primary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
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
                </button>
                <div class="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 p-4" style={{ width: '300px' }}>
                  <div class="pb-4">
                    <a href="javascript:void(0)" class="d-flex align-items-center">
                      <img src="images/shop/product/s-1.jpg" class="shadow rounded" style={{ maxHeight: '64px' }} alt="" />
                      <div class="flex-1 text-start ms-3">
                        <h6 class="text-dark mb-0">T-shirt (M)</h6>
                        <p class="text-muted mb-0">$320 X 2</p>
                      </div>
                      <h6 class="text-dark mb-0">$640</h6>
                    </a>

                    <a href="javascript:void(0)" class="d-flex align-items-center mt-4">
                      <img src="images/shop/product/s-2.jpg" class="shadow rounded" style={{ maxHeight: '64px' }} alt="" />
                      <div class="flex-1 text-start ms-3">
                        <h6 class="text-dark mb-0">Bag</h6>
                        <p class="text-muted mb-0">$50 X 5</p>
                      </div>
                      <h6 class="text-dark mb-0">$250</h6>
                    </a>

                    <a href="javascript:void(0)" class="d-flex align-items-center mt-4">
                      <img src="images/shop/product/s-3.jpg" class="shadow rounded" style={{ maxHeight: '64px' }} alt="" />
                      <div class="flex-1 text-start ms-3">
                        <h6 class="text-dark mb-0">Watch (Men)</h6>
                        <p class="text-muted mb-0">$800 X 1</p>
                      </div>
                      <h6 class="text-dark mb-0">$800</h6>
                    </a>
                  </div>

                  <div class="d-flex align-items-center justify-content-between pt-4 border-top">
                    <h6 class="text-dark mb-0">Total($):</h6>
                    <h6 class="text-dark mb-0">$1690</h6>
                  </div>

                  <div class="mt-3 text-center">
                    <a href="javascript:void(0)" class="btn btn-primary me-2">
                      View Cart
                    </a>
                    <a href="javascript:void(0)" class="btn btn-primary">
                      Checkout
                    </a>
                  </div>
                  <p class="text-muted text-start mt-1 mb-0">*T&C Apply</p>
                </div>
              </div>
            </li>
            <li class="list-inline-item mb-0">
              <a href="#" class="btn btn-icon btn-pills btn-primary" data-bs-toggle="modal" data-bs-target="#wishlist">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                </svg>
              </a>
            </li>
            <li class="list-inline-item mb-0">
              <div class="dropdown dropdown-primary">
                <button
                  type="button"
                  class="btn btn-icon btn-pills btn-primary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                </button>
                <div class="dropdown-menu dd-menu dropdown-menu-end bg-white shadow rounded border-0 mt-3 py-3" style={{ width: '200px' }}>
                  <a class="dropdown-item text-dark" href="#">
                    <i class="uil uil-user align-middle me-1"></i> Account
                  </a>
                  <a class="dropdown-item text-dark" href="#">
                    <i class="uil uil-clipboard-notes align-middle me-1"></i> Order History
                  </a>
                  <a class="dropdown-item text-dark" href="#">
                    <i class="uil uil-arrow-circle-down align-middle me-1"></i> Download
                  </a>
                  <div class="dropdown-divider my-3 border-top"></div>
                  <a class="dropdown-item text-dark" href="#">
                    <i class="uil uil-sign-out-alt align-middle me-1"></i> Logout
                  </a>
                </div>
              </div>
            </li>
          </ul>

          <div id="navigation">
            <ul class="navigation-menu">
              <li>
                <a href="index-shop.html" class="sub-menu-item">
                  Home
                </a>
              </li>

              <li>
                <a href="shop-aboutus.html" class="sub-menu-item">
                  {' '}
                  About Us
                </a>
              </li>

              <li class="has-submenu parent-menu-item">
                <a href="javascript:void(0)">Shop</a>
                <span class="menu-arrow"></span>
                <ul class="submenu">
                  <li>
                    <a href="shop-fullwidth-grids.html" class="sub-menu-item">
                      Fullwidth Grid
                    </a>
                  </li>
                  <li>
                    <a href="shop-grids.html" class="sub-menu-item">
                      Product Grids
                    </a>
                  </li>
                  <li>
                    <a href="shop-fullwidth-lists.html" class="sub-menu-item">
                      Fullwidth List
                    </a>
                  </li>
                  <li>
                    <a href="shop-lists.html" class="sub-menu-item">
                      Product List
                    </a>
                  </li>
                  <li>
                    <a href="shop-product-detail.html" class="sub-menu-item">
                      Product Details
                    </a>
                  </li>
                  <li>
                    <a href="shop-cart.html" class="sub-menu-item">
                      Shop Cart
                    </a>
                  </li>
                  <li>
                    <a href="shop-checkouts.html" class="sub-menu-item">
                      Checkouts
                    </a>
                  </li>
                  <li>
                    <a href="shop-myaccount.html" class="sub-menu-item">
                      My Account
                    </a>
                  </li>
                </ul>
              </li>

              <li class="has-submenu parent-menu-item">
                <a href="javascript:void(0)">Pages</a>
                <span class="menu-arrow"></span>
                <ul class="submenu">
                  <li>
                    <a href="auth-login.html" class="sub-menu-item">
                      Login
                    </a>
                  </li>
                  <li>
                    <a href="auth-signup.html" class="sub-menu-item">
                      Signup
                    </a>
                  </li>
                  <li>
                    <a href="auth-re-password.html" class="sub-menu-item">
                      Reset Password
                    </a>
                  </li>
                  <li>
                    <a href="page-comingsoon.html" class="sub-menu-item">
                      Coming Soon
                    </a>
                  </li>
                  <li>
                    <a href="page-maintenance.html" class="sub-menu-item">
                      Maintenance
                    </a>
                  </li>
                  <li>
                    <a href="page-error.html" class="sub-menu-item">
                      Error
                    </a>
                  </li>
                  <li>
                    <a href="page-thankyou.html" class="sub-menu-item">
                      Thank you
                    </a>
                  </li>
                </ul>
              </li>

              <li class="has-submenu parent-menu-item">
                <a href="javascript:void(0)">Blog</a>
                <span class="menu-arrow"></span>
                <ul class="submenu">
                  <li>
                    <a href="shop-blog.html" class="sub-menu-item">
                      Blog Grid
                    </a>
                  </li>
                  <li>
                    <a href="shop-blog-detail.html" class="sub-menu-item">
                      Blog Detail
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
