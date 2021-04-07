import React, { Component } from 'react';
import { Link } from 'react-router-dom' ;
import NavBar from '../navbar/navbar';
import Footer from '../navbar/footer';


class Contact extends Component {
    render() {
        return(
<div>
<NavBar/>
<br/><br/>
<br/>
<section id="contact" className="contact">
       
        <div className="container" data-aos="fade-up">
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt" />
                  <h4>Location:</h4>
                  <p>centre Urbain, Bloc X ,3eme etage</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope" />
                  <h4>Email:</h4>
                  <p>edu-info@educinfo.tn.com</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone" />
                  <h4>Numero:</h4>
                  <p>+216 00 11 22 33 44</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" id="name" placeholder="Votre Nom" required />
                  </div>
                  <div className="col-md-6 form-group">
                    <input type="text" name="mail" className="form-control" id="mail" placeholder="Votre Email" required />
                  </div>
               
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Objet" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>


    </div>
      );
    }
    }

    export default Contact;