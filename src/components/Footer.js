import React from 'react'
import '../css/Footer.css'
export default function Footer() {
  return (
    <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">Review Films</h5>
                <p class="grey-text text-lighten-4">Where you can watch the main content of your favorite movies without having to pay.</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="https://github.com/VinhUser">Github: Vinhuser</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://www.facebook.com/kosakiyuuki/">Facebook: Vinh Nguyễn</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Phone: 0359404798</a></li>
                  <li><a class="grey-text text-lighten-3" href="https://vinhomes.vn/vi">Vinhomes Grand Park, Quận 9, TPHCM</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">
            © 2022 Copyright Text
            </div>
          </div>
        </footer>
  )
}
