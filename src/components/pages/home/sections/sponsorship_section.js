import React from 'react';
import { Link } from 'react-router-dom';
import { GiRibbonMedal} from 'react-icons/gi';
import {IconContext} from 'react-icons/lib';
import './sponsorship_section.css'

function SponsorshipSection(){

  return (

   	<div className="sponsorship__section" id="sponsorship-section-id">
   		<div className="sponsorship__wrapper">
   			<h1 className="sponsorship__heading">SPONSORSHIP</h1>
             <h2 className="sponsorship__subheading">Contact : sponsor_dinowex-list@um.edu.my</h2>
   			<div className="sponsorship__container">
   				<Link to="/" className="sponsorship__container-card">
   					<div className="sponsorship__container-cardInfo">
                     <h7>BRONZE PACKAGE</h7>
   						<div className="icon">
   							<IconContext.Provider value={{color:'#cd7f32 ', size: 64}}>
                           <GiRibbonMedal />
                        </IconContext.Provider>   
   						</div>
   						<h4>RM500 - RM999</h4>
   					   
                     <ul className='sponsorship__container-features'>
                        <li>&#10004;Logo in promotional material</li>
                        <li>&#10008;Materials on event platform</li>
                        <li>&#10008;Personal booth and interaction with participants</li>
                     </ul>11
   						<button className="sponsorship__register-button">Sponsor</button>
   					</div>
   				</Link>
   				<Link to="/" className="sponsorship__container-card">
   					<div className="sponsorship__container-cardInfo">
                     <h7>SILVER PACKAGE</h7>
   						<div className="icon">
   							<IconContext.Provider value={{color:'#C0C0C0', size: 64}}>
                           <GiRibbonMedal />
                        </IconContext.Provider>  
   						</div>
   						<h4>RM1000 - RM2999</h4>
   						<ul className='sponsorship__container-features'>
                        <li>&#10004;Logo in promotional material</li>
                        <li>&#10004;Materials on event platform</li>
                        <li>&#10008;Personal booth and interaction with participants</li>
                     </ul>
   						<button className="sponsorship__register-button">Sponsor</button>
   					</div>
   				</Link>
   				<Link to="/" className="sponsorship__container-card">
   					<div className="sponsorship__container-cardInfo">
                     <h7>GOLD PACKAGE</h7>
   						<div className="icon">
   							<IconContext.Provider value={{color:'#ffd700', size: 64}}>
                           <GiRibbonMedal />
                        </IconContext.Provider>  
   						</div>
   						<h4>RM3000 and above</h4>
   						<ul className='sponsorship__container-features'>
                        <li>&#10004;Logo in promotional material</li>
                        <li>&#10004;Materials on event platform</li>
                        <li>&#10004;Personal booth and interaction with participants</li>
                     </ul>
   						<button className="sponsorship__register-button">Sponsor</button>
   					</div>
   				</Link>
   			</div>
   		</div>
   	</div>
  )
}

export default SponsorshipSection;
