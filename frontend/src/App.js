import React from 'react';
import './App.css';
import img1 from './images/foto1.jpg';
import img2 from './images/foto2.jpg';



function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#"><span className='text-warning'>Build</span>Con</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#services">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#team">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact</a>
              </li>

              
            </ul>
          </div>
        </div>
      </nav>

      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
              <p><a href='#' className='btn btn-warning mt3'>Learn More</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100" alt="..." />
            <div className="carousel-caption ">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
              <p><a href='#' className='btn btn-warning mt3'>Learn More</a></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img1} className="d-block w-100" alt="..." />
            <div className="carousel-caption">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
              <p><a href='#' className='btn btn-warning mt3'>Learn More</a></p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* about section */}

     
      <section id="about" className="about-section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="about-img">
                <img src={img1} alt='' className='img-fluid' />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5 align-self-center">
              <div className="about-text">
                <h2>We Provide Best Quality <br />Services Ever</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                <a href='#' className='btn btn-warning'>Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* services */}
      <section id='services' className='services section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-header text-center pb-5'>
                <h2>Our Services</h2>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-12 col-md-12 col-lg-4'>
              <div className='card text-white text-center bg-dark pb-2'>
                <div className='card-body'>
                  <i className='bi bi-subtract'></i>
                  <h3 className='card-title'>Best Quality</h3>
                  <p className='lead'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam expedita earum nesciunt hic a temporibus eaque non tempora adipisci dolore</p>
                  <button className='btn btn-warning text-dark'>Read More</button>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-12 col-lg-4'>
              <div className='card text-white text-center bg-dark pb-2'>
                <div className='card-body'>
                  <i className='bi bi-subtract'></i>
                  <h3 className='card-title'>Integrity</h3>
                  <p className='lead'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam expedita earum nesciunt hic a temporibus eaque non tempora adipisci dolore molestias vel facere</p>
                  <button className='btn btn-warning text-dark'>Read More</button>
                </div>
              </div>
            </div>


            <div className='col-12 col-md-12 col-lg-4'>
              <div className='card text-white text-center bg-dark pb-2'>
                <div className='card-body'>
                  <i className='bi bi-subtract'></i>
                  <h3 className='card-title'>Sustainability</h3>
                  <p className='lead'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam expedita earum nesciunt hic a temporibus eaque non tempora adipisci dolore molestias vel facere</p>
                  <button className='btn btn-warning text-dark'>Read More</button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* portfolio section */}

      <section id='portfolio' className='portfolio section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
            <div className='section-header text-center pb-5'>
                <h2>Our Projects</h2>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-12 col-md-12 col-lg-4'>
              <div className='card text-light text-center bg-white pb-2'>
                <div className='card-body text-dark'>
                  <div className='img-are mb-4'>
                    <img src={img2} className='img-fluid' width='300px' height='300px'/>
                    <p className='lead'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam expedita earum nesciunt hic a temporibus eaque non tempora adipisci dolore molestias vel facere</p>
                    <button className='btn bg-warning text-dark'>Learn More</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-12 col-lg-4'>
              <div className='card text-light text-center bg-white pb-2'>
                <div className='card-body text-dark'>
                  <div className='img-are mb-4'>
                    <img src={img1} className='img-fluid'width='300px' height='100px'/>
                    <p className='lead'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam expedita earum nesciunt hic a temporibus eaque non tempora adipisci dolore molestias vel facere</p>
                    <button className='btn bg-warning text-dark'>Learn More</button>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-12 col-lg-4'>
              <div className='card text-light text-center bg-white pb-2'>
                <div className='card-body text-dark'>
                  <div className='img-are mb-4'>
                    <img src={img2} className='img-fluid' width='300px' height='300px'/>
                    <p className='lead'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam expedita earum nesciunt hic a temporibus eaque non tempora adipisci dolore molestias vel facere</p>
                    <button className='btn bg-warning text-dark'>Learn More</button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* team section  */}

      <section id='team' className='team section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-header text-center pb-5'>
                <h2>Our Projects</h2>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-3'>
              <div className='card text-center'>
                <div className='card-body'>
                  <img src={img1} className='img-fluid rounded-circle'/>
                  <h3 className='card-title py-2'>Jack Wilson</h3>
                  <p className='card-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam expedita earum nesciunt hic a temporibus eaque non tempora adipisci dolore molestias vel facere</p>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-6 col-lg-3'>
              <div className='card text-center'>
                <div className='card-body'>
                  <img src={img1} className='img-fluid rounded-circle'/>
                  <h3 className='card-title py-2'>Jack Wilson</h3>
                  <p className='card-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam expedita earum nesciunt hic a temporibus eaque non tempora adipisci dolore molestias vel facere</p>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-6 col-lg-3'>
              <div className='card text-center'>
                <div className='card-body'>
                  <img src={img1} className='img-fluid rounded-circle'/>
                  <h3 className='card-title py-2'>Jack Wilson</h3>
                  <p className='card-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam expedita earum nesciunt hic a temporibus eaque non tempora adipisci dolore molestias vel facere</p>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-6 col-lg-3'>
              <div className='card text-center'>
                <div className='card-body'>
                  <img src={img1} className='img-fluid rounded-circle'/>
                  <h3 className='card-title py-2'>Jack Wilson</h3>
                  <p className='card-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam expedita earum nesciunt hic a temporibus eaque non tempora adipisci dolore molestias vel facere</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* contact section*/}

      <section id='contact' className='contact section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-header text-center pb-5'>
                <h2>Contact Us</h2>
                <p>Lorem ipsum, dolor sit amet consectetur</p>
              </div>
            </div>
          </div>

          <div className='row m-0'>
            <div className='col-md-12 p-0 pt-4 pb-4'>
                <form action='' className='bg-light p-4.m-auto'>
                    <div className='row'>
                        <div className='col-md-12'>
                          <div className='mb-3'>
                            <input type='text' className='form-control' required placeholder='Your Full Name'/>
                          </div>
                        </div>

                        <div className='col-md-12'>
                          <div className='mb-3'>
                            <input type='email' className='form-control' required placeholder='Your Email Here'/>
                          </div>
                        </div>
                      
                        <div className='col-md-12'>
                          <div className='mb-3'>
                          <textarea name='' rows="3" required className='form-control' placeholder='Your Query Here'/>
                          </div>
                        </div>

                      <button className='btn btn-warning btn-lg btn-block mt-3'>Send Now</button>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </section>


      {/* footer */} 
      <footer className='bg-dark p-2 text-center'>
        <div className='container'>
          <p className='text-white'>All Right Reserved</p>
        </div>
      </footer>


    </div>
  );
}

export default App;