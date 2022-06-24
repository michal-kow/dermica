import { Link, animateScroll as scroll } from "react-scroll";
import { RiLeafLine } from 'react-icons/ri';
import { HiMenu } from 'react-icons/hi';
import { CgClose } from 'react-icons/cg';
import { useState } from 'react';

const Navbar = () => {

    const [navbar, setNavbar] = useState(false);
    const [hamburger, setHamburger] = useState(false);
    
    const changeBackground = () => {
        if(window.scrollY >= 76) {
        setNavbar(true);
        } else {
        setNavbar(false);
        }
    }

    const changeHamburger = () => {
        if(hamburger === false) {
            setHamburger(true);
        } else if(hamburger === true) {
            setHamburger(false);
        }
    }

    const setOffset = () => {
        if(window.innerWidth <= 992) {
            return -60;
        } else {
            return -76;
        }
    }

    const closeHamburger = () => setHamburger(false);

    window.addEventListener('scroll', changeBackground);

    return ( 
        <div className={navbar ? "navbar active" : "navbar"}>
            <div className="box">
                <Link to ="home" smooth={true} duration={600}><h2 className="name">dermica <RiLeafLine /></h2></Link>
                <div className={hamburger ? "links side" : "links"}>
                    <Link to="home" smooth={true} duration={600} onClick={closeHamburger}>Home</Link>
                    <Link to="offert" smooth={true} duration={600} offset={ setOffset() } onClick={closeHamburger}>Offert</Link>
                    <Link to="products" smooth={true} duration={600} offset={ setOffset() } onClick={closeHamburger}>Products</Link>
                    <Link to="contact" smooth={true} duration={600} offset={ setOffset() } onClick={closeHamburger}>Contact</Link>
                </div>
                <button className="hamburger" onClick={ changeHamburger }>{hamburger ? <CgClose /> : <HiMenu />}</button>
            </div>
            <div className="line"></div>
        </div>
     );
}
 
export default Navbar;