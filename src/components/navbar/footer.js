import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/img/favicon.png';
import './assets/img/apple-touch-icon.png';

import './assets/vendor/animate.css/animate.min.css';
import './assets/vendor/aos/aos.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/remixicon/remixicon.css';
import './assets/vendor/swiper/swiper-bundle.min.css';

class Footer extends Component {
    render() {
        return (

            <footer id="footer">
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-6 footer-contact">
                    <h3>EDUCINFO</h3>
                    <p>
                      Tunis, <br />
                      centre Urbain, Bloc X ,3eme etage<br />
                      Tunisie<br /><br />
                      <strong>Phone:</strong> +216 00 11 22 33 44<br />
                      <strong>Email:</strong> edu-info@educinfo.tn.com<br />
                    </p>
                  </div>
                  <div className="col-lg-2 col-md-6 footer-links">
                    <h4>Liens</h4>
                    <ul>
                    <li><i className="bx bx-chevron-right" /><Link to='/'><div   >Acceuil</div></Link></li>
                    <li><i className="bx bx-chevron-right" /><Link to='cours'><div   >Cours</div></Link></li>
                    <li><i className="bx bx-chevron-right" /><Link to='formateur'><div   >Formateurs</div></Link></li>
                    <li><i className="bx bx-chevron-right" /><Link to='contact'><div   >Contact</div></Link></li>
                    <li><i className="bx bx-chevron-right" /><Link to='propos'><div   >Apropos</div></Link></li>
                    <li><i className="bx bx-chevron-right" /><Link to='connecter'><div   >Connecter</div></Link></li>

                    </ul>
                  </div>
                  <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Nos Services</h4>
                    <ul>
                    <li><i className="bx bx-chevron-right" /><Link to='cours'><div   >HTML/CSS</div></Link></li>
                    <li><i className="bx bx-chevron-right" /><Link to='cours'><div   >Angular</div></Link></li>
                    <li><i className="bx bx-chevron-right" /><Link to='cours'><div   >Spring Boot</div></Link></li>
                    <li><i className="bx bx-chevron-right" /><Link to='cours'><div   >Laravel</div></Link></li>
                    <li><i className="bx bx-chevron-right" /><Link to='cours'><div   >Symfony</div></Link></li>
                    <li><i className="bx bx-chevron-right" /><Link to='cours'><div   >Reactjs</div></Link></li>
                    </ul>
                  </div>
                  <div className="col-lg-4 col-md-6 footer-newsletter">
                    <h4>Suivez nous !</h4>
                    <p />
                    <form action method="post">
                    <Link to='/connecter'><div className="get-started-btn">S'inscrire</div></Link>

                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="container d-md-flex py-4">
              <div className="me-md-auto text-center text-md-start">
                <div className="copyright">
                  © Copyright <strong><span>EDUCINFO</span></strong>. All Rights Reserved
                </div>
                <div className="credits">
                  {/* All the links in the footer should remain intact. */}
                  {/* You can delete the links only if you purchased the pro version. */}
                  {/* Licensing information: https://bootstrapmade.com/license/ */}
                  {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/mentor-free-education-bootstrap-theme/ */}
                  Designed by <a href="https://bootstrapmade.com/">NotreEquipe</a>
                </div>
              </div>
              <div className="social-links text-center text-md-right pt-3 pt-md-0">
                <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
                <a href="#" className="facebook"><i className="bx bxl-facebook" /></a>
                <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
              </div>
            </div>
          </footer>        );
    }
}

    export default Footer;