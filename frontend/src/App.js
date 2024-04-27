import React, { useState,useEffect } from 'react';
import './App.css';
import img1 from './images/foto1.jpg';
import img2 from './images/foto2.jpg';
// import img1 from './images/foto3.jpg';
// import img2 from './images/team1.jpg'; // Shtimi i imazhit të një anëtari të ekipit

function App() {

  const [sliderImages, setSliderImages] = useState([img1, img2]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSliderImage = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
  };

  // Përdorimi i useEffect për të ndryshuar fotot pas një sekonde
  useEffect(() => {
    const intervalId = setInterval(changeSliderImage, 3000);
    return () => clearInterval(intervalId); // Fshirja e intervalit kur komponenti zhvendoset
  }, []);

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#"><span className='text-warning'>Farmaci</span>Shqiptare</a>
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
                <a className="nav-link" href="#products">Products</a> 
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#login">Log In</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Slider për produktet e fundit */}
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {sliderImages.map((_, index) => (
            <button key={index} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} className={currentSlide === index ? 'active' : ''} aria-current="true" aria-label={`Slide ${index + 1}`}></button>
          ))}
        </div>
        <div className="carousel-inner">
          {sliderImages.map((image, index) => (
            <div key={index} className={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
              <img src={image} className="d-block w-100" alt={`Product ${index + 1}`} />
              <div className="carousel-caption">
                <h5>{index === 0 ? 'Aspirin' : 'Vitamin C'}</h5>
                <p>{index === 0 ? 'For relief of minor aches and pains' : 'Boosts the immune system'}</p>
                <p><a href='#' className='btn btn-warning mt3'>Buy Now</a></p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev" onClick={() => setCurrentSlide((prevSlide) => (prevSlide === 0 ? sliderImages.length - 1 : prevSlide - 1))}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next" onClick={changeSliderImage}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <section id='services' className='about-section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-md-12 col-12'>
              <div className='about-img'>
                <img src={img1} alt='' className='img-fluid' />
              </div>
            </div>
            <div className='col-lg-8 col-md-12 col-12 ps-lg-5 mt-md-5 align-self-center'>
              <div className='about-text'>
                <h2>We Provide Best Quality <br />Services Ever</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit</p>
                <a href='#' className='btn btn-warning'>Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pjesa e kodit për "Products" */}
      <section id='products' className='products section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-header text-center pb-5'>
                <h2>Our Products</h2>
                <p>Explore our range of pharmaceutical products</p>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-12 col-md-6 col-lg-4'>
              <div className='card text-light text-center bg-dark pb-2'>
                <div className='card-body'>
                  <img src={img1} className='img-fluid' alt='Product 1'/>
                  <h3 className='card-title'>Product Name</h3>
                  <p className='lead'>Product description goes here</p>
                  <button className='btn btn-warning text-dark'>Buy Now</button>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-6 col-lg-4'>
              <div className='card text-light text-center bg-dark pb-2'>
                <div className='card-body'>
                  <img src={img2} className='img-fluid' alt='Product 2'/>
                  <h3 className='card-title'>Product Name</h3>
                  <p className='lead'>Product description goes here</p>
                  <button className='btn btn-warning text-dark'>Buy Now</button>
                </div>
              </div>
            </div>

            <div className='col-12 col-md-6 col-lg-4'>
              <div className='card text-light text-center bg-dark pb-2'>
                <div className='card-body'>
                  <img src={img1} className='img-fluid' alt='Product 3'/>
                  <h3 className='card-title'>Product Name</h3>
                  <p className='lead'>Product description goes here</p>
                  <button className='btn btn-warning text-dark'>Buy Now</button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* Pjesa e kodit për "Our Services" */}

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


      {/* Pjesa e kodit për "Contact" dhe "Footer" mbetet e njëjtë */}

      {/* Pjesa e kodit për "Contact" */}
      <section id='contact' className='contact section-padding'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <div className='section-header text-center pb-5'>
                <h2>Contact Us</h2>
                <p>Get in touch with us for any queries</p>
              </div>
            </div>
          </div>

          <div className='row m-0'>
            <div className='col-md-12 p-0 pt-4 pb-4'>
                <form action='' className='bg-light p-4 m-auto'>
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

      {/* Footer */}
      <footer className='bg-dark p-2 text-center'>
        <div className='container'>
          <p className='text-white'>All Right Reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
