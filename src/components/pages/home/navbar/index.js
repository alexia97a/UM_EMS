import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.css';
import { IconContext } from 'react-icons/lib';
 
function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);


	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	const showButton = () => {
		if(window.innerWidth <= 960){
			setButton(false)
		} else {
			setButton(true)
		}
	}

useEffect( () =>{
	showButton();
}, []);


window.addEventListener('resize', showButton);


	return (

		<IconContext.Provider value={{color:'#fff'}}>
		<div className="navbar">
			<div className="navbar-container container">
				<LinkS to='home-section-id' className="navbar-logo" onClick={closeMobileMenu}>
					<img src="/assets/logo.png"/>
				</LinkS>

				<div className="menu-icon" onClick={handleClick}>
					{click ? <FaTimes />  : <FaBars/>}
				</div>

				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li className="nav-item">
						<LinkS to='home-section-id' className='nav-links' onClick={closeMobileMenu}>
							Home
						</LinkS>
					</li>
					<li className="nav-item">
						<LinkS to='competition-section-id' className='nav-links' onClick={closeMobileMenu}>
							Competition
						</LinkS>
					</li>
					<li className="nav-item">
						<LinkS to='sponsorship-section-id' className='nav-links' onClick={closeMobileMenu}>
							Sponsorship
						</LinkS>
					</li>
					<li className="nav-item">
						<LinkS to='/contactUs' className='nav-links' onClick={closeMobileMenu}>
							Contact Us
						</LinkS>
					</li>
				</ul>
			</div>
		</div>
		</IconContext.Provider>	
	
	)
}

	export default Navbar
