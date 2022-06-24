import heroImage from './img/hero_img.jpg';
import doctorImage from './img/doctor.jpg';
import { Link} from "react-scroll";
import { Link as OuterLink } from 'react-router-dom';
import { useEffect } from 'react';
import { ImPhone } from 'react-icons/im';
import { HiMail } from 'react-icons/hi';
import { MdPlace } from 'react-icons/md';
import { BsInstagram} from 'react-icons/bs';
import { FaTiktok, FaFacebookF } from 'react-icons/fa';

const Home = () => {

  useEffect(() => {
    document.title = "Dermica Skin Clinic";
  }, []);

  return (
      <div className="home">
        {/* HERO SECTION */}
        <div className="hero-section">
          <div className="title">
            <h2 className="upper"><span>Your</span> skin</h2>
            <h2 className="lower">matters to <span>us</span></h2>
            <p className="sup">The best skin clinic in the country</p>
            <p className='info'>We care about your skin like noone does. Our team of worldwide known doctors will help you in the best possible way.</p>
            <p>The clinic is ran by</p>
            <p className="owner">Dr Susan Fillmore</p>
            <div className="contact-button">
              <Link to="contact" smooth={true} duration={600} offset={-76}>Contact us</Link>
            </div>
          </div>
          <div className="hero-img">
            <img src={heroImage} alt="Face image" />
          </div>
        </div>

        {/* OFFERT SECTION */}
        <div className="offert">
          <div className="boxes">
            <div className="box">
              <h2 className="procedure">first</h2>
              <p className="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam autem adipisci, ipsum numquam non architecto vitae mollitia alias ipsa nobis quis tempora reprehenderit ab ducimus animi? Totam tempore mollitia quibusdam.</p>
              <Link to="contact" smooth={true} duration={600} offset={-76}>Schedule</Link>
            </div>
            <div className="box">
              <h2 className="procedure">second</h2>
              <p className="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam autem adipisci, ipsum numquam non architecto vitae mollitia alias ipsa nobis quis tempora reprehenderit ab ducimus animi?</p>
              <Link to="contact" smooth={true} duration={600} offset={-76}>Schedule</Link>
            </div>
            <div className="box">
              <h2 className="procedure">third</h2>
              <p className="info">Totam autem adipisci, ipsum numquam non architecto vitae mollitia alias ipsa nobis quis tempora reprehenderit ab ducimus animi? Totam tempore mollitia quibusdam.</p>
              <Link to="contact" smooth={true} duration={600} offset={-76}>Schedule</Link>
            </div>
            <div className="box">
              <h2 className="procedure">fourth</h2>
              <p className="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              <Link to="contact" smooth={true} duration={600} offset={-76}>Schedule</Link>
            </div>
            <div className="box">
              <h2 className="procedure">fifth</h2>
              <p className="info">Totam tempore mollitia quibusdam.</p>
              <Link to="contact" smooth={true} duration={600} offset={-76}>Schedule</Link>
            </div>
            <div className="box">
              <h2 className="procedure">sixth</h2>
              <p className="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam autem adipisci, ipsum numquam non architecto vitae mollitia alias ipsa nobis quis tempora reprehenderit ab ducimus animi? Totam tempore mollitia quibusdam.</p>
              <Link to="contact" smooth={true} duration={600} offset={-76}>Schedule</Link>
            </div>
          </div>
        </div>

        {/* PRODUCTS SECTION */}
        <div className="products">
          <div className="box">
            <div className="product">
              <h2>Product #1</h2>
              <p>This product is very good for eyes</p>
              <div className="buy">
                <Link to="contact" smooth={true} duration={600} offset={-76}>Buy</Link>
              </div>
            </div>
            <div className="product">
              <h2>Product #2</h2>
              <p>Best face cream</p>
              <div className="buy">
                <Link to="contact" smooth={true} duration={600} offset={-76}>Buy</Link>
              </div>
            </div>
            <div className="product">
              <h2>Product #3</h2>
              <p>You need this thing</p>
              <div className="buy">
                <Link to="contact" smooth={true} duration={600} offset={-76}>Buy</Link>
              </div>
            </div>
            <div className="product">
              <h2>Product #4</h2>
              <p>This is very usefull aswell</p>
              <div className="buy">
                <Link to="contact" smooth={true} duration={600} offset={-76}>Buy</Link>
              </div>
            </div>
          </div>
        </div>

        {/* CONTACT SECTION*/}
        <div className="contact">
          <div className="content">
            <img src={ doctorImage } alt="doctor image" className="doctor-image" />
            <div className="text">
              <h2 className="owner">Dr Susan Fillmore</h2>
              <div className="data phone">
                <p><ImPhone /> &nbsp; +1-601-101-6006</p>
              </div>
              <OuterLink to={{ pathname: "mailto: dr.susan.fillmore@gmail.com" }}  target="_blank" className="data mail">
                <p><HiMail /> &nbsp; dr.susan.fillmore@gmail.com</p>
              </OuterLink>
              <OuterLink to={{ pathname: "https://goo.gl/maps/wU8z2881gjmDgbuU8" }}  target="_blank" className="data address">
                <p><MdPlace /> &nbsp; 20 East 30th Street, New York</p>
              </OuterLink>
            </div>
          </div>
          {/* FOOTER */}
          <div className="footer">
            <div className="items">
              <div className="socials">
                <OuterLink to={{ pathname: "https://www.instagram.com/dermica_clinic/" }} target="_blank"><BsInstagram /></OuterLink>
                <OuterLink to={{ pathname: "https://www.facebook.com/dermica_clinic" }} target="_blank"><FaFacebookF /></OuterLink>
                <OuterLink to={{ pathname: "https://www.tiktok.com/@dermica_clinic" }} target="_blank"><FaTiktok /></OuterLink>
              </div>
              <p>&copy; 2022 Michał Kowalik</p>
            </div>
          </div>
        </div>
        </div>
    );
}
 
export default Home;