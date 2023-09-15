import React from "react";
import Layout from "../components/Layouts/Layout";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaEnvelope,FaPhoneAlt,FaCrosshairs  } from 'react-icons/fa';
// import { IoLocation } from 'react-icons/io5';

const HomePage = () => {
  return (
    <Layout title={"Best Offers"}>
      <section id="hero">
        <div class="container">
          <div class="row">
            <div
              class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center"
              data-aos="fade-up"
            >
              <div>
                <h1>Dress Up & Stand Out: Be Bold!</h1>
                <h2>Get Start Your Favorite Shoping! Made With Quality</h2>
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </div>
            <div
              class="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="fade-left"
            >
              <img src="/images/hero-img.png" class="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="about" class="about">
        <div class="container">
          <div class="row">
            <div class="col-lg-6" data-aos="zoom-in">
              <img src="images/aboutt.jpg" class="img-fluid" alt="" />
            </div>
            <div
              class="col-lg-6 d-flex flex-column justify-contents-center"
              data-aos="fade-left"
            >
              <div class="content pt-4 pt-lg-0">
                <h3>Learn more about us</h3>
                <p class="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li>
                    <i>
                      <AiOutlineCheckCircle />
                    </i>{" "}
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    <i>
                      <AiOutlineCheckCircle />
                    </i>{" "}
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </li>
                  <li>
                    <i>
                      <AiOutlineCheckCircle />
                    </i>{" "}
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate trideta
                    storacalaperd
                  </li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate tera noden
                  carma palorp mades tera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" class="portfolio">
        <div class="container">
          <div
            class="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <img
                  src="images/portfolio-1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img
                  src="images/portfolio-3.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <img
                  src="images/portfolio-4.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-card">
              <div class="portfolio-wrap">
                <img
                  src="images/portfolio-5.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-web">
              <div class="portfolio-wrap">
                <img
                  src="images/portfolio-6.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>

            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
              <div class="portfolio-wrap">
                <img
                  src="images/portfolio-7.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact section-bg">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2>Contact Us</h2>
        </div>

        <div className="row" style={{marginBottom:"120px"}}>
          <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-right">
            <div className="info">
              <div className="address">
                <i><FaCrosshairs  /></i>
                <h4>Location:</h4>
                <p>DLF cyber city, patia, Bhubneswar</p>
              </div>

              <div className="email">
                <i><FaEnvelope /></i>
                <h4>Email:</h4>
                <p>estpl@example.com</p>
              </div>

              <div className="phone">
                <i><FaPhoneAlt/></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" title="map" frameborder="0" style={{height:"290px",width:"100%",border:'0'}} allowfullscreen></iframe>
            </div>

          </div>

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-left">
            <form style={{margin:"auto"}}>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" class="form-control" id="name" required />
                </div>
                <div class="form-group col-md-6 mt-3 mt-md-0">
                  <label for="name">Your Email</label>
                  <input type="email" class="form-control" name="email" id="email" required />
                </div>
              </div>
              <div class="form-group mt-3">
                <label for="name">Subject</label>
                <input type="text" class="form-control" name="subject" id="subject" required />
              </div>
              <div class="form-group mt-3">
                <label for="name">Message</label>
                <textarea class="form-control" name="message" rows="5" required></textarea>
              </div>
              <div class="text-center my-3"><button type="submit" class="btn btn-primary d-grid col-4 mx-auto">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
    </Layout>
  );
};

export default HomePage;
