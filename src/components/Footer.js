import React from 'react'

const Footer = (props) => {
  return (
    <body>
      <div>
        <div class="footer">
          <footer class=" text-center text-lg-start ">
            <div class="row">
              <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                <h5 class="text-uppercase text-light">About Us</h5>

                <p class="text-light">
                  Shop No.5,New Super Market, MG Road, Pune
                </p>
                <p class="text-light">Contact- 7387656788</p>
              </div>

              <div class="col-lg-3 col-md-3 mb-4 mb-md-0"></div>

              <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 class=" text-light">Social</h5>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1"
                ></meta>
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
                />
                <a href="#" class="fa fa-facebook"></a>
                <a href="#" class="fa fa-twitter"></a>
                <a href="#" class="fa fa-google"></a>
                <a href="#" class="fa fa-instagram"></a>

                <div class="text-left p-2">
                  <a class="text-light" href="https://mdbootstrap.com/">
                    Copyright@ 2021 Medicinshop.com
                  </a>
                </div>
              </div>

              <div></div>
            </div>
          </footer>
        </div>
      </div>
    </body>
  )
}

export default Footer
