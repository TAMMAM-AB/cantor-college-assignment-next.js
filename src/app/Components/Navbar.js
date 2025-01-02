'use client'; // so useState works
import Link from "next/link";
import "./Navbar.css";
import React, { useState } from "react";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }

    return(
        <nav>
            <button className='burger' onClick={toggleMenu}>&#9776;</button>
            <menu className={menuOpen ? "active" : ""}>
                <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
                <li><Link href="/about-us" onClick={toggleMenu}>About Us</Link></li>
                <li><Link href="/find-us" onClick={toggleMenu}>Find Us</Link></li>
                <li><Link href="/courses" onClick={toggleMenu}>Courses</Link></li>
                <li><Link href="/computing-courses" onClick={toggleMenu}>Computing Courses</Link></li>
                <li><Link href="/design-courses" onClick={toggleMenu}>Design Courses</Link></li>
                <li><Link href="/facilities" onClick={toggleMenu}>Facilities</Link></li>
                <li><Link href="/learning-resources" onClick={toggleMenu}>Learning Resources</Link></li>
                <li><Link href="/info-for-staff" onClick={toggleMenu}>Info for Staff</Link></li>
                <li><Link href="/info-for-students" onClick={toggleMenu}>Info for Students</Link></li>
                <li><Link href="/working-with-businesses" onClick={toggleMenu}>Working with Businesses</Link></li>
                <li><Link href="/contact-us" onClick={toggleMenu}>Contact Us</Link></li>
            </menu>
        </nav>
    )
}
export default Navbar;